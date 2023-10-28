import React, { createContext, useContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ name: "gabriel" }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext)
}

