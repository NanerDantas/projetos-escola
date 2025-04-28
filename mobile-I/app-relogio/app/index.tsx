import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <Text style = {{fontSize: 80, color: 'white'}}>Tela inicial</Text>
      <Link href = "/relogio" style = {{color: 'white'}}>Ir para relogio</Link>
      <Link href = "/cronometro" style = {{color: 'white'}}>Ir para cronometro</Link>
    </View>
  );
}
