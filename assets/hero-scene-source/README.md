# Fantasy Meows hero scene v2 (layered pixel art)

Native grid 480x270, upscaled exactly 4x (nearest) to 1920x1080. One shared 48-color palette (palette.json / palette.png), binary alpha only.

Stack back to front:
- layer-0-sky.png   (opaque; light 4x4 ordered dither on the gradient)
- layer-1-far.png   (mountains, valley, castle; opaque from the hill line down)
- layer-2-mid.png   (forest sides, lanterns, path, meadow; center cut open so only L1 shows the castle)
- layer-3-front.png (campfire, three cats, ground patch, mushrooms, dark grass band along the bottom)

-1x files are the native 480x270 versions. composite*.png are flattened previews.
CSS: image-rendering: pixelated; scale by whole numbers only.
Suggested parallax speeds: 0.1 / 0.25 / 0.5 / 0.8.
Rebuild: python3 build_hero_scene_v2.py (numpy + Pillow).
