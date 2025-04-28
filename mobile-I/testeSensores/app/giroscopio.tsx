import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { Gyroscope } from 'expo-sensors';

export default function Giroscopio() {
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });

      useEffect (() => {
        const subscription = Gyroscope.addListener(setData);
        return () => subscription.remove();
    }, []);

    return (
        <View style = {styles.pagina}>
            <Text style = {styles.texto}>x: {x}</Text>
            <Text style = {styles.texto}>y: {y}</Text>
            <Text style = {styles.texto}>z: {z}</Text>
            <Link href = "/" style = {styles.botao}>
                <TouchableOpacity>
                    <Text>Voltar a Tela Inicial</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    pagina: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
    },

    texto: {
        fontSize: 30,
    },

    botao: {
        marginTop: 20,
        fontSize: 20,
        backgroundColor: '#808080',
        padding: 10,
        borderRadius: 8,
    }
})