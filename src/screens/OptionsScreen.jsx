import React, { useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Options() {
  const [ isLogged, setIsLogged ] = useContext(Context)

  async function logout() {
    AsyncStorage.multiRemove(['userId', 'accessToken', 'isLogged'])
    setIsLogged(false)
  }

  return(
    <View>
      <Text>
        OptionsScreen
      </Text>
      <Button title="Deconnexion" onPress={logout} />
    </View>
  )
}
