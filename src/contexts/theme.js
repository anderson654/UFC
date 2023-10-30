import React, { createContext, useContext, useState } from "react";
import { styles } from "../themes/dark"

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState({});

    useState(() => {
        setTheme(styles);
    }, [])

    return (
        <ThemeContext.Provider value={styles}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext)
}

