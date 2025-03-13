import getTheme from '../actions/current-theme';
import ThemeMode from '../enum/theme';
import ITheme from '../interface/itheme';
import { extendTheme } from '@mui/joy';

export const createJoyTheme = (
  baseTheme: ITheme = getTheme(ThemeMode.LIGHT),
  mode: ThemeMode = ThemeMode.LIGHT
) =>
  extendTheme({
    colorSchemes: {
      [mode]: {
        palette: { ...baseTheme.palette },
      },
    },
  });

export default createJoyTheme;

//   dark: {
//     palette: {
//       primary: {
//         ...baseTheme.palette.primary,
//         solidBg: 'var(--joy-palette-secondary-400)',
//         solidActiveBg: 'var(--joy-palette-secondary-500)',
//         outlinedBorder: 'var(--joy-palette-secondary-700)',
//         outlinedColor: 'var(--joy-palette-secondary-600)',
//         outlinedActiveBg: 'var(--joy-palette-secondary-900)',
//         softColor: 'var(--joy-palette-secondary-500)',
//         softBg: 'var(--joy-palette-secondary-900)',
//         softActiveBg: 'var(--joy-palette-secondary-800)',
//         plainColor: 'var(--joy-palette-secondary-500)',
//         plainActiveBg: 'var(--joy-palette-secondary-900)',
//       },
//     },
//   },
