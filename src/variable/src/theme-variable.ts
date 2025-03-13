import IPalette from '../../interface/icolors';
import ITheme from '../../interface/itheme';
import DefaultTheme from '../../theme-kind/light';

export const getThemeVariables = (theme: ITheme = DefaultTheme) => {
  const baseThemeColors = theme.palette;
  return convertColorsToResult(baseThemeColors as IPalette);
};

function convertColorsToResult(inputColors: IPalette): string {
  let result = '';
  for (const [key, value] of Object.entries(inputColors)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      for (const [subKey, subValue] of Object.entries(value)) {
        result +=
          subKey === 'DEFAULT'
            ? `--${subKey}: ${subValue as string};`
            : `--${key}-${subKey}: ${subValue as string};`;
      }
    } else result += `--${key}: ${value};`;
  }
  return result;
}

export default getThemeVariables;
