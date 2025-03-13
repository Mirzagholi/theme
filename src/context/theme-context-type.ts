import ThemeMode from '../enum/theme';

export type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};
