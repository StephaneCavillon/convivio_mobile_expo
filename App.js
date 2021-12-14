import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/navigation/RootNavigation'
import { LoginStackNavigator } from './src/navigation/StackNavigation'
import { TabNavigation } from './src/navigation/TabNavigation'
import Context from './src/utils/context/Context'

export default function App() {
  const [ isLogged, setIsLogged ] = useState(false)

  const getUserId = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  async function auth() {
    const isLogged = await AsyncStorage.getItem('isLogged')
    if (isLogged) {
      setIsLogged(true)
    } else{
      setIsLogged(false)
    }
  }

  useEffect(() => auth(), [isLogged])

  return (
      <Context.Provider value={{  isLogged, setIsLogged , getUserId }}>
        <NavigationContainer ref={navigationRef}>
          { !isLogged ?
            <LoginStackNavigator/> :
            <TabNavigation />
          }
        </NavigationContainer>
      </Context.Provider>
  );
}