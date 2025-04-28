import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ClockScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
      <Text style = {{fontSize: 80, color: 'white'}}>08:00</Text>
      <Link href = "/" style = {{color: 'white'}}>Ir para a tela inicial</Link>
      <Link href = "/cronometro" style = {{color: 'white'}}>Ir para cronometro</Link>
    </View>
  );
}