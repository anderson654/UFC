import React, { createContext, useContext, useState } from "react";
import darkTheme from "../themes/dark"

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState({});

    useState(() => {
        setTheme(darkTheme);
    },[])

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}

