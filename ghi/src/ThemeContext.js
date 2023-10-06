import React, { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("isDarkMode") === "true";
        setIsDarkMode(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("isDarkMode", isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {children}
        </ThemeContext.Provider>
    );
    };

    export const useTheme = () => {
    return useContext(ThemeContext);
};
