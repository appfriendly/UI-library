import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function App() {

  return (
        

    <View style={styles.container}>
       
        <Text style = {{fontSize: 20}}>
          Эта страница для тестов
        </Text>
        <StatusBar style="auto" />
 
    </View>
      

  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
