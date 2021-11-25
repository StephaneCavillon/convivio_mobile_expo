import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { LoginStackNavigator } from './src/navigation/StackNavigation'
import { TabNavigation } from './src/navigation/TabNavigation'
import Context from './src/utils/context/Context'

import Home from './src/screens/HomeScreen'
import Dashboard from './src/screens/DashboardScreen'

export default function App() {
  const [ isLogged, setIsLogged ] = useState(false)

  async function auth() {
    const isLogged = await AsyncStorage.getItem('isLogged')
    if (isLogged) {
      setIsLogged(true)
    }
  }

  useEffect(() => auth(), [isLogged])

  return (
    <View>
      <Home />
      <Context.Provider value={ [ isLogged, setIsLogged ] }>
        <NavigationContainer>
          { !isLogged ?
            <LoginStackNavigator/> :
            <TabNavigation />
          }
        </NavigationContainer>
      </Context.Provider>
    </View>
  );

}