import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={requireNativeModule('./assets/imagem.jpg')} style={styles.logo} requiredMode="contain"/>
      <Text>HELLO WORLD!</Text>
      <StatusBar style="auto" />
      <Text style={styles.header}>Olá Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    height:400,
  },
  logo: {
    width: 300,
    height:
  },
});
