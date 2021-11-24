import React from 'react'
import { StyleSheet, Text, View, StatusBar  } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import Home from './src/screens/HomeScreen'

export default function App() {
  return (
    <View>
      <Home />
      {/* <LoginScreen />
       {/* <Text>pouet!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}