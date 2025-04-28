import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function index() {
  return (
    <View style = {styles.pagina}>
      <Text style = {styles.titulo}>Tela Inicial</Text>
      <Link href = "/acelerometro" style = {styles.botoes}>     
        <TouchableOpacity>
          <Text>Acelerometro</Text>
        </TouchableOpacity>
      </Link>

      <Link href = "/giroscopio" style = {styles.botoes}>
        <TouchableOpacity>
          <Text>Giroscopio</Text>
        </TouchableOpacity>
      </Link>

      <Link href = "/detectorLuz" style = {styles.botoes}>
        <TouchableOpacity>
          <Text>Detector de Luz</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );  
}

const styles = StyleSheet.create({
  pagina: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },

  titulo: {
    fontSize: 70,
    marginTop: 50,
  },

  botoes: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 8,
  }
})
