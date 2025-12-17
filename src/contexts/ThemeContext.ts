import {createContext} from "react"

interface ThemeContext{
    isDarkMode: boolean;
    toggleTheme: () => void;

}

export const ThemeContext = createContext<ThemeContext|null>(null)