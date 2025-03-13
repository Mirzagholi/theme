
import ThemeMode from "../enum/theme";
import ITheme from "../interface/itheme";
import darkTheme from "../theme-kind/dark";
import lightTheme from "../theme-kind/light";

const getTheme = (mode: ThemeMode): ITheme => {
  switch (mode) {
    case ThemeMode.DARK:
      return darkTheme;
    case ThemeMode.LIGHT:
    default:
      return lightTheme;
  }
};

export default getTheme;