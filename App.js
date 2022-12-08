import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/screens/Cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de fast Refresh!</Text>
      <StatusBar style="auto" />
      <Cesta />
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
});
