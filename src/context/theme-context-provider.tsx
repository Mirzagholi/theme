import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ThemeMode from '../enum/theme';
import getTheme from '../actions/current-theme';
import setThemeVariables from '../actions/gloabal-variable';
import ThemeContext from './theme-context';
import { ThemeContextType } from './theme-context-type';
import { CssVarsProvider } from '@mui/joy';
import createJoyTheme from '../joy-ui/joy-theme';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  const themeContextValue = useMemo(
    () => ({ mode, setMode } as ThemeContextType),
    [mode]
  );
  
  const currentTheme = useCallback(() => getTheme(mode as ThemeMode), [mode]);
  const theme = useMemo(() => createJoyTheme(currentTheme(), mode), [mode]);

  useEffect(() => {
    const theme = currentTheme();
    setThemeVariables(theme);
  }, [mode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
       <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
