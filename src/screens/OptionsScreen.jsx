import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text } from 'react-native'
import { LogoutModal } from '../components/LogoutModal'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Options() {
  const [ isLogged, setIsLogged ] = useContext(Context)
  const [ modalVisibility, setModalVisibility ] = useState(false)

  async function logout() {
    AsyncStorage.multiRemove(['userId', 'accessToken', 'isLogged'])
    setIsLogged(false)
  }

  return(
    <View>
      <Text>
        OptionsScreen
      </Text>
      <LogoutModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        logout={logout}
      />
      <Button title="Deconnexion" onPress={() => setModalVisibility(!modalVisibility)} />
    </View>
  )
}
