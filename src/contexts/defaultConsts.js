import React, { createContext, useContext, useState, useEffect } from "react";

export const DefaultConstsContext = createContext({});

export default function DefaultConstsProvider({ children }) {
    const [layoutTopSidebar, setLayoutTopSidebar] = useState(null);
    const [modalLogin, setModalLogin] = useState(true);
    const [stepModalLogin, setStepModalLogin] = useState(0);
    const [screenPrevius, setScreenPrevius] = useState(0);

    //tempo restante para o evento
    const [tempoRestante, setTempoRestante] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

    useEffect(() => {
        // Defina a data-alvo para o seu contador
        const dataAlvo = new Date('2023-12-31 23:59:59').getTime();

        const interval = setInterval(() => {
            const agora = new Date().getTime();
            const diferenca = dataAlvo - agora;

            if (diferenca <= 0) {
                // Se o tempo acabou, limpe o intervalo
                clearInterval(interval);
                setTempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
            } else {
                const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

                setTempoRestante({
                    dias: String(dias).padStart(2, '0'),
                    horas: String(horas).padStart(2, '0'),
                    minutos: String(minutos).padStart(2, '0'),
                    segundos: String(segundos).padStart(2, '0'),
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <DefaultConstsContext.Provider value={{
            setLayoutTopSidebar,
            setModalLogin,
            setStepModalLogin,
            setScreenPrevius,
            layoutTopSidebar,
            modalLogin,
            stepModalLogin,
            screenPrevius,
            tempoRestante
        }}>
            {children}
        </DefaultConstsContext.Provider>
    )
}

export function useDefaultConstsContext() {
    return useContext(DefaultConstsContext)
}