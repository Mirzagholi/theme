import ThemeMode from '../enum/theme';
import ITheme from '../interface/itheme';

const DEFAULTColor = 500;

const baseColors = {
  primary: {
    100: '#2F4968',
    200: '#265995',
    300: '#1B62B5',
    400: '#096BDE',
    500: '#2178DD',
    600: '#4886D0',
    700: '#6A96CA',
    800: '#A5B8CF',
    900: '#C0CCD9',
  },
  secondary: {
    100: '#A5B8CF',
    200: '#6A96CA',
    300: '#4886D0',
    400: '#2178DD',
    500: '#096BDE',
    600: '#1B62B5',
    700: '#265995',
    800: '#2F4968',
    900: '#2F3C4C',
  },
  error: {
    200: '#EF9A9A',
    500: '#F44336',
    800: '#C62828',
  },
  warning: {
    200: '#FFE082',
    500: '#FFC107',
    800: '#FFA000',
  },
  info: {
    200: '#90CAF9',
    500: '#2196F3',
    800: '#1976D2',
  },
  success: {
    200: '#A5D6A7',
    500: '#109515',
    800: '#388E3C',
  },
};

const createPalette = (colors: Record<number, string>) => ({
  ...colors,
  ...(DEFAULTColor in colors ? { DEFAULT: colors[DEFAULTColor] } : {}),
});

const darkTheme: ITheme = {
  palette: {
    mode: ThemeMode.DARK,
    primary: createPalette(baseColors.primary),
    secondary: createPalette(baseColors.secondary),
    error: createPalette(baseColors.error),
    warning: createPalette(baseColors.warning),
    info: createPalette(baseColors.info),
    success: createPalette(baseColors.success),
    surface: createPalette({
      100: baseColors.secondary[100],
      200: baseColors.secondary[200],
      300: baseColors.secondary[300],
      400: baseColors.secondary[400],
      500: baseColors.secondary[500],
      600: baseColors.secondary[600],
      700: baseColors.secondary[700],
      800: baseColors.secondary[800],
      900: baseColors.secondary[900],
    }),
    card: createPalette({
      100: baseColors.secondary[100],
      200: baseColors.info[200],
      300: baseColors.secondary[300],
      400: baseColors.secondary[400],
      500: baseColors.info[500],
      600: baseColors.secondary[600],
      700: baseColors.secondary[700],
      800: baseColors.info[800],
      900: baseColors.secondary[900],
    }),
  },
};

export default darkTheme;
