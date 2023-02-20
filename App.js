import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FButton } from './src/components/Buttons/button'

export default function App() {
  function test () {
    console.log('click')
  }
  return (
    <View style={styles.container}>
      <Text>Это страница теста компонентов.</Text>
      <FButton title="Click" background="white" function={test} />
      <FButton title="Click" background="black" />
      <FButton title="Click" background="green" />
      <FButton title="Click" background="blue" />
      <FButton title="Click" background="red" />
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
