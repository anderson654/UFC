import React, { createContext, useContext, useState } from "react";

export const DefaultConstsContext = createContext({});

export default function DefaultConstsProvider({ children }) {
    const [layoutTopSidebar, setLayoutTopSidebar] = useState(null);

    return (
        <DefaultConstsContext.Provider value={{ setLayoutTopSidebar, layoutTopSidebar }}>
            {children}
        </DefaultConstsContext.Provider>
    )
}

export function useDefaultConstsContext() {
    return useContext(DefaultConstsContext)
}