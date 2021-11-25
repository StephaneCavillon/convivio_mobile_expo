import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { LoginStackNavigator } from './src/navigation/StackNavigation'
import { TabNavigation } from './src/navigation/TabNavigation'

export default function App() {
  const [ connected, setConnected ] = useState(false)

  async function auth() {
    const connected = await AsyncStorage.getItem('connected')
    console.log('connected', connected)
    if (connected) {
      setConnected(connected)
    }
  }

  useEffect(() => auth(), [])

  return (
    <NavigationContainer>
      { !connected ?
        <LoginStackNavigator/> :
        <TabNavigation />
      }
    </NavigationContainer>
  );

}