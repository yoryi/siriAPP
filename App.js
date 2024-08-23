import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as module from './modules/siri';

export default function App() {
  const test = () => {
   const s = module.hello()
   console.log('res: ', s);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Siri App!</Text>

      <TouchableOpacity onPress={test} style={{backgroundColor: 'black', padding: 20, borderRadius: 10, marginTop: 30}}>
        <Text style={{color: 'white'}}>Module</Text>
      </TouchableOpacity>

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
