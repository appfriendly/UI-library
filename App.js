import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FButton } from './src/components/Buttons/button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Это страница теста компонентов.</Text>
      <FButton title="Click"/>
      <FButton title="123"/>
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
