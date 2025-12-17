import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider