import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FButton } from './src/components/Buttons/button'

export default function App() {
  function test () {
    console.log('123')
  }
  return (
    <View style={styles.container}>
      <Text>Это страница теста компонентов.</Text>
      <FButton background="blue" function={test} title="click"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
