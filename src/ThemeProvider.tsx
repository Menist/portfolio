import React, { createContext, useContext, useState, ReactNode } from 'react';
import {themeNew} from "./styles/ColorSheme";
import {GlobalStyled} from "./styles/Global.styled";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<any>(null);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const theme = isDarkTheme ? 'dark' : 'light';

    const themeObj = themeNew(isDarkTheme);

    return (
        <ThemeContext.Provider value={{ theme, themeObj, toggleTheme }}>
            <GlobalStyled themeObj={themeObj}/>
            {children}
        </ThemeContext.Provider>
    );
};
