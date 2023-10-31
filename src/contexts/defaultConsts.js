import React, { createContext, useContext, useState } from "react";

export const DefaultConstsContext = createContext({});

export default function DefaultConstsProvider({ children }) {
    const [layoutTopSidebar, setLayoutTopSidebar] = useState(null);
    const [modalLogin, setModalLogin] = useState(true);
    const [stepModalLogin, setStepModalLogin] = useState(0);

    return (
        <DefaultConstsContext.Provider value={{ setLayoutTopSidebar, setModalLogin, setStepModalLogin, layoutTopSidebar, modalLogin, stepModalLogin }}>
            {children}
        </DefaultConstsContext.Provider>
    )
}

export function useDefaultConstsContext() {
    return useContext(DefaultConstsContext)
}