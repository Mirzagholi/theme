import ThemeMode from '../enum/theme';
import ITheme from '../interface/itheme';

const defaultColor = 500;

const baseColors = {
  primary: {
    100: '#FFE5E6',
    200: '#FFC2C3',
    300: '#FF7C7E',
    400: '#FF4D4F',
    500: '#FF1A1D',
    600: '#E60004',
    700: '#B30003',
    800: '#800002',
    900: '#4D0001',
  },
  secondary: {
    100: '#F0F0F5',
    200: '#E7E8EF',
    300: '#BFBFBF',
    400: '#A6A6A6',
    500: '#8C8C8C',
    600: '#737373',
    700: '#595959',
    800: '#404040',
    900: '#262626',
  },
  tertiary: {
    100: '#F5F7FA',
    200: '#E7E8EF',
    300: '#D0D3DC',
    400: '#A6A6A6',
    500: '#8C8C8C',
    600: '#737373',
    700: '#595959',
    800: '#404040',
    900: '#262626',
  },
  accent: {
    50: '#FFF',
    100: '#f1f1f1',
    200: '#d4d4d4',
    300: '#b8b8b8',
    400: '#9c9c9c',
    500: '#808080',
    600: '#636363',
    700: '#474747',
    800: '#2a2a2a',
    900: '#0e0e0e',
  },
  error: {
    200: '#F28B82',
    500: '#E57373',
    800: '#D32F2F',
  },
  warning: {
    200: '#FFF59D',
    500: '#FFEB3B',
    800: '#FBC02D',
  },
  info: {
    200: '#81D4FA',
    500: '#29B6F6',
    800: '#0288D1',
  },
  success: {
    200: '#A5D6A7',
    500: '#4CAF50',
    800: '#388E3C',
  },
};

const createPalette = (colors: Record<number, string>) => ({
  ...colors,
  ...(defaultColor in colors ? { DEFAULT: colors[defaultColor] } : {}),
});

export const lightTheme: ITheme = {
  palette: {
    mode: ThemeMode.LIGHT,
    primary: createPalette(baseColors.primary),
    secondary: createPalette(baseColors.secondary),
    tertiary: createPalette(baseColors.tertiary),
    accent: createPalette(baseColors.accent),
    error: createPalette(baseColors.error),
    warning: createPalette(baseColors.warning),
    info: createPalette(baseColors.info),
    success: createPalette(baseColors.success),
    surface: createPalette({
      100: baseColors.tertiary[200],
      200: baseColors.tertiary[300],
      300: baseColors.tertiary[400],
      400: baseColors.tertiary[500],
      500: baseColors.tertiary[600],
      600: baseColors.tertiary[700],
      700: baseColors.tertiary[800],
      800: baseColors.tertiary[900],
      900: baseColors.secondary[900],
    }),
    card: createPalette({
      100: baseColors.accent[100],
      200: baseColors.accent[200],
      300: baseColors.accent[300],
      400: baseColors.accent[400],
      500: baseColors.accent[500],
      600: baseColors.accent[600],
      700: baseColors.accent[700],
      800: baseColors.accent[800],
      900: baseColors.accent[900],
    }),
  },
};

export default lightTheme;
