import numpy as np, os, shutil, json
from PIL import Image
A='/home/box/agent-data/agents/05591bd0-0fa6-4895-a04e-c81f56ed71b6/assets/'
SRC=dict(anchor='c595139540bb9c951cf8456c7e852695b5b04c138fafbad7753c78633b39dce5.jpg',
 sky='e2037a7b661c05308485ee03a0cf913719b99d5f266f3040ad07367d3632e996.jpg',
 far='2e6253dbc9937178a6b0fb6b29253f483a1905257a3eadfc9159df16a02b44e8.jpg',
 mid='1414d32942e3d06233ae3ccecc02d5b4ed04d7e1e2afdb3906c3143629db12a4.jpg',
 front='769141a31ef42bd13539e81ffce8bd25037f3b741f906a7573ea13c118c6e1bc.jpg')
OUT='/workspace/fantasy-meows-hero-scene-v2'; W,H=480,270; S=4
NC=int(os.environ.get('NC',48)); COVT=float(os.environ.get('COVT',0.6))
def load(k): return np.asarray(Image.open(A+SRC[k]).convert('RGB')).astype(np.float32)

def shift(m,dy,dx):
    o=np.zeros_like(m); h,w=m.shape
    o[max(dy,0):h+min(dy,0), max(dx,0):w+min(dx,0)] = m[max(-dy,0):h+min(-dy,0), max(-dx,0):w+min(-dx,0)]
    return o
def dilate(m,r=1):
    o=m.copy()
    for dy in range(-r,r+1):
        for dx in range(-r,r+1): o|=shift(m,dy,dx)
    return o
def erode(m,r=1): return ~dilate(~m,r)
def nb(m):
    c=np.zeros(m.shape,np.int32)
    for dy in (-1,0,1):
        for dx in (-1,0,1):
            if dy or dx: c+=shift(m,dy,dx)
    return c

def keymask(a):
    R,G,B=a[...,0],a[...,1],a[...,2]
    hard=(R>150)&(G<0.22*R)&(B>0.4*R)&(B<0.85*R)
    # remove tiny hard specks inside objects
    hard=hard&(nb(hard)>=3)
    soft=dilate(hard,2)&(R>60)&(G<0.35*R)&(B>0.35*R)&(B<1.0*R)
    return hard|soft   # True = transparent

def box(arr):
    return np.asarray(Image.fromarray(arr.astype(np.float32),'F').resize((W,H),Image.BOX))
def down(a,opaque):
    cov=box(opaque.astype(np.float32))
    rgb=np.stack([box(a[...,i]*opaque) for i in range(3)],-1)/np.maximum(cov,1e-4)[...,None]
    return rgb,cov

from collections import deque
def components(al):
    lab=np.zeros(al.shape,np.int32); n=0; sizes=[0]; h,w=al.shape
    for y,x in zip(*np.nonzero(al)):
        if lab[y,x]: continue
        n+=1; q=deque([(y,x)]); lab[y,x]=n; c=0
        while q:
            cy,cx=q.popleft(); c+=1
            for dy in (-1,0,1):
                for dx in (-1,0,1):
                    yy,xx=cy+dy,cx+dx
                    if 0<=yy<h and 0<=xx<w and al[yy,xx] and not lab[yy,xx]:
                        lab[yy,xx]=n; q.append((yy,xx))
        sizes.append(c)
    return lab,np.array(sizes)
def drop_small(al,minsz,region=None):
    lab,sz=components(al); small=sz[lab]<minsz
    if region is not None: small&=region
    return al&~small
def clean_alpha(al):
    for _ in range(2):
        al=al&(nb(al)>=2)          # drop isolated / hairline specks
        al=al|((~al)&(nb(al)>=7))  # fill pinholes
    return al

# ---- palette from anchor
anc=load('anchor')
anc1=np.asarray(Image.fromarray(anc.astype(np.uint8)).resize((W,H),Image.BOX))
pq=Image.fromarray(anc1).quantize(colors=NC,method=Image.Quantize.MEDIANCUT,kmeans=4)
pal=np.array(pq.getpalette()[:NC*3],np.float32).reshape(-1,3)
pal=np.unique(pal,axis=0)
def nearest(rgb):
    # perceptual-ish weighting
    w=np.array([0.30,0.59,0.11],np.float32)**0.5
    d=(((rgb[...,None,:]-pal[None,None])*w)**2).sum(-1)
    return pal[d.argmin(-1)]
BAYER=np.array([[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]],np.float32)/16-0.47
def nearest_dither(rgb,amp=10):
    t=np.tile(BAYER,(H//4+1,W//4+1))[:H,:W]
    return nearest(rgb+t[...,None]*amp)

layers={}
# L0 sky
sky=load('sky'); s1=np.stack([box(sky[...,i]) for i in range(3)],-1)
layers['layer-0-sky']=(nearest_dither(s1),np.ones((H,W),bool))

# L1 far
far=load('far'); t=keymask(far); rgb,cov=down(far,~t)
al=clean_alpha(cov>=COVT); q=nearest(rgb)
# opaque from hill line down: first row with a solid run of 3 opaque px
for x in range(W):
    col=al[:,x]
    run=col&np.roll(col,-1)&np.roll(col,-2); run[-2:]=False
    ys=np.where(run)[0]
    if len(ys)==0: continue
    y0=ys[0]
    for y in range(y0+1,H):
        if not al[y,x]: q[y,x]=q[y-1,x]; al[y,x]=True
DX,DY=int(os.environ.get('DX',-45)),int(os.environ.get('DY',-38))
q2=np.zeros_like(q); a2=np.zeros_like(al)
ys=np.clip(np.arange(H)-DY,0,H-1); xs=np.clip(np.arange(W)-DX,0,W-1)
q2=q[ys][:,xs].copy(); a2=al[ys][:,xs].copy()
# areas exposed by the shift: mirror the adjacent content (seamless) instead of edge-smear
for y in range(H+DY,H):
    m=2*(H+DY)-1-y; q2[y]=q2[m]; a2[y]=a2[m]
for x in range(W+DX,W):
    m=2*(W+DX)-1-x; q2[:,x]=q2[:,m]; a2[:,x]=a2[:,m]
q,al=q2,a2
al=drop_small(al,8)
layers['layer-1-far']=(q,al)

# L2 mid, with the distant center hills/castle cut out
mid=load('mid'); t=keymask(mid)
R,G,B=mid[...,0],mid[...,1],mid[...,2]
dist=((R-G)>40)&((B-G)>25)&(R>55)
Hs,Ws=t.shape; reg=np.zeros_like(t); reg[:int(Hs*0.70),int(Ws*0.30):int(Ws*0.75)]=True
cut=(t|dist)
cut=erode(dilate(cut,5),5)      # close over castle lights / speckles
cut=cut&reg
# remove anything in region above the topmost tree line that is enclosed by cut (lights surrounded)
t2=t|cut
rgb,cov=down(mid,~t2); al=clean_alpha(cov>=COVT); q=nearest(rgb)
r1=np.zeros((H,W),bool); r1[:int(H*0.70),int(W*0.28):int(W*0.77)]=True
al=drop_small(al,40,r1); al=drop_small(al,6)
layers['layer-2-mid']=(q,al)
np.save('/workspace/hs2work/l2cut.npy',cut)

# L3 front + optional grass band from anchor bottom
fr=load('front'); t=keymask(fr); rgb,cov=down(fr,~t); al=clean_alpha(cov>=COVT); q=nearest(rgb)
BAND=int(os.environ.get('BAND',14))
if BAND:
    aq=nearest(anc1.astype(np.float32))
    lum=anc1.astype(np.float32)@np.array([.3,.59,.11],np.float32)
    band=np.zeros((H,W),bool)
    solid=BAND//2
    band[H-solid:]=True
    top=slice(H-BAND,H-solid)
    band[top]=lum[top]<float(os.environ.get('BLUM',34))
    band=clean_alpha(band); band[H-solid:]=True
    put=band&~al
    q[put]=aq[put]; al=al|band
al=drop_small(al,6)
layers['layer-3-front']=(q,al)

os.makedirs(OUT,exist_ok=True)
def save(name,q,al):
    rgba=np.dstack([q.astype(np.uint8),(al*255).astype(np.uint8)])
    mode='RGB' if al.all() else 'RGBA'
    im=Image.fromarray(rgba if mode=='RGBA' else rgba[...,:3],mode)
    im.save(f'{OUT}/{name}-1x.png',optimize=True)
    im.resize((W*S,H*S),Image.NEAREST).save(f'{OUT}/{name}.png',optimize=True)
    return im.convert('RGBA')
comp=None; stats={}
used=set()
for n,(q,al) in layers.items():
    im=save(n,q,al)
    comp=im if comp is None else Image.alpha_composite(comp,im)
    a=np.asarray(im).astype(int)
    m=(a[...,3]>0)&(a[...,0]>150)&(a[...,1]<60)&(a[...,2]>90)
    semi=((a[...,3]>0)&(a[...,3]<255)).sum()
    stats[n]=dict(magenta=int(m.sum()),semi_alpha=int(semi),opaque_pct=round(100*(a[...,3]>0).mean(),1))
    used|={tuple(c) for c in a[a[...,3]>0][:,:3].tolist()}
comp=comp.convert('RGB')
comp.save(f'{OUT}/composite-1x.png',optimize=True)
c4=comp.resize((W*S,H*S),Image.NEAREST); c4.save(f'{OUT}/composite.png',optimize=True)
c4.resize((1280,720),Image.BOX).save(f'{OUT}/composite-preview-1280.png',optimize=True)
# palette swatch
sw=Image.new('RGB',(len(pal)*20,20))
for i,c in enumerate(pal): sw.paste(tuple(int(v) for v in c),(i*20,0,i*20+20,20))
sw.save(f'{OUT}/palette.png')
json.dump(dict(palette=[('#%02x%02x%02x'%tuple(int(v) for v in c)) for c in pal]),open(f'{OUT}/palette.json','w'),indent=1)
print('palette',len(pal),'used',len(used)); print(json.dumps(stats,indent=1))
