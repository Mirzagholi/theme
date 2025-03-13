import { createContext, useContext } from 'react';
import ThemeMode from '../enum/theme';
import ThemeContextProvider from './theme-context-provider';
import { useContextWapper } from '@orkinet/shared/util/context';
import { ThemeContextType } from './theme-context-type';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  return useContextWapper(ThemeContext, {
    contextName: useThemeContext,
    providerName: ThemeContextProvider,
  });
};

export default ThemeContext;
