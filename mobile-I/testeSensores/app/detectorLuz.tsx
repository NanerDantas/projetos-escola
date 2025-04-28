import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Link } from 'expo-router';
import { LightSensor } from 'expo-sensors';

export default function App() {
    const [{ illuminance }, setData] = useState({ illuminance: 0 });

    useEffect (() => {
        const subscription = LightSensor.addListener(sensorData => {
            setData(sensorData);
        })
        return () => subscription.remove();
    }, []);

    return (
        <View style = {styles.pagina}>
            <Text style = {styles.texto}>Sensor de Luz: </Text>
            <Text style = {styles.texto}>
                Illuminance: {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}
            </Text>
            <Link href = "/" style = {styles.botao}>
                <TouchableOpacity>
                    <Text>Voltar a Tela Inicial</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create ({
    pagina: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250,
    },

    botao: {
        marginTop: 20,
        fontSize: 20,
        backgroundColor: '#808080',
        padding: 10,
        borderRadius: 8,
    },

    texto: {
        fontSize: 30,
    },
})