import DefaultTheme from '../theme-kind/light';
import IPalette from '../interface/icolors';

function convertColorsToResult(
  inputColors: IPalette
): Record<string, Record<string, string> | string> {
  const result: Record<string, Record<string, string> | string> = {};
  const defaultColor = 500;
  for (const [key, value] of Object.entries(inputColors)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      result[key] = {};
      for (const [subKey, _subValue] of Object.entries(value)) {
        result[key][subKey] = `var(--${key}-${subKey})`;
      }
      if (defaultColor in value) {
        result[key].DEFAULT = `var(--${key}-DEFAULT)`;
      }
    } else {
      result[key] = `var(--${key})`;
    }
  }
  return result;
}

const colors = convertColorsToResult(DefaultTheme.palette as IPalette);

export default colors;
