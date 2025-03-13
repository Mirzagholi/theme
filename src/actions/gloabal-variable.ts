import IPalette from '../interface/icolors';
import ITheme from '../interface/itheme';
import DefaultTheme from '../theme-kind/light';

const setThemeVariables = (theme: ITheme = DefaultTheme) => {
  const baseThemeColors = theme.palette;
  convertColorsToResult(baseThemeColors as IPalette);
};

function convertColorsToResult(inputColors: IPalette) {
  if (typeof window !== 'undefined') {
    for (const [key, value] of Object.entries(inputColors)) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        for (const [subKey, subValue] of Object.entries(value)) {
          document.documentElement.style.setProperty(
            `--${key}-${subKey}`,
            subValue as string
          );
        }
      } else document.documentElement.style.setProperty(`--${key}`, value);
    }
  }
}

export default setThemeVariables;

