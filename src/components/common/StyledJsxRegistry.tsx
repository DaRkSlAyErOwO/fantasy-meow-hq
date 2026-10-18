'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

/**
 * Collects <style jsx> rules during prerender and inlines them into the HTML.
 * Without it the static export ships unstyled markup and component CSS only
 * appears after hydration (flash of unstyled content + layout shift).
 */
export const StyledJsxRegistry: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = registry.styles();
    registry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={registry}>{children}</StyleRegistry>;
};
