import React from 'react'
import { StyleSheet, Text, View, StatusBar  } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import TabNavigation from './src/navigation/TabNavigation'

export default function App() {

  return (
    <View >
      <LoginScreen />
       {/* <Text>pouet!</Text> */}
      <StatusBar style="auto" />
      <TabNavigation />
    </View>
  );
}