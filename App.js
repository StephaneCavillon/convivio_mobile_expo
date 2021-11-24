import React from 'react'
import { StyleSheet, Text, View, StatusBar  } from 'react-native'
import LoginScreen from './src/screens/loginScreen';

export default function App() {

  return (
    <View >
      <LoginScreen />
       {/* <Text>pouet!</Text> */}
      <StatusBar style="auto" />
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
