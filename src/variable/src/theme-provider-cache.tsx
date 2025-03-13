'use client';

import { CssVarsProvider } from '@mui/joy/styles';
import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from './emotion-cache';
import createJoyTheme from '../../joy-ui/joy-theme';

const cache = createEmotionCache();

export function ThemeProviderCache({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createJoyTheme();
  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </CacheProvider>
  );
}
