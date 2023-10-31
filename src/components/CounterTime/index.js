import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useThemeContext } from '../../contexts/theme';
import { useDefaultConstsContext } from '../../contexts/defaultConsts';

const CounterTime = () => {
    // const [tempoRestante, setTempoRestante] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

    const styles = useThemeContext();
    const { tempoRestante } = useDefaultConstsContext();

    // useEffect(() => {
    //     // Defina a data-alvo para o seu contador
    //     const dataAlvo = new Date('2023-12-31 23:59:59').getTime();

    //     const interval = setInterval(() => {
    //         const agora = new Date().getTime();
    //         const diferenca = dataAlvo - agora;

    //         if (diferenca <= 0) {
    //             // Se o tempo acabou, limpe o intervalo
    //             clearInterval(interval);
    //             setTempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    //         } else {
    //             const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    //             const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //             const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    //             const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    //             setTempoRestante({
    //                 dias: String(dias).padStart(2, '0'),
    //                 horas: String(horas).padStart(2, '0'),
    //                 minutos: String(minutos).padStart(2, '0'),
    //                 segundos: String(segundos).padStart(2, '0'),
    //             });
    //         }
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    const memoizedComponent = useMemo(() => {
        if (tempoRestante.dias == 0 && tempoRestante.horas == 0 && tempoRestante.minutos == 0 && tempoRestante.segundos == 0) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, marginTop: 20, width: "80%" }}>
                <Text style={styles.titleTextHours}>o evento começa em</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.hours}>{tempoRestante.dias}</Text>
                        <Text style={styles.subTextHours}>dias</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.hours}>{tempoRestante.horas}</Text>
                        <Text style={styles.subTextHours}>horas</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.hours}>{tempoRestante.minutos}</Text>
                        <Text style={styles.subTextHours}>minutos</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.hours}>{tempoRestante.segundos}</Text>
                        <Text style={styles.subTextHours}>segundos</Text>
                    </View>
                </View>
            </View>
        );
    }, [tempoRestante]);

    return memoizedComponent;
};

export default CounterTime;
