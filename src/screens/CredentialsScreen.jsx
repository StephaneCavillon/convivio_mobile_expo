import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { LogoutModal } from '../components/LogoutModal'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../styles/theming'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Credentials({navigation}) {
  const { isLogged, setIsLogged } = useContext(Context)
  const [ modalVisibility, setModalVisibility ] = useState(false)

  async function logout() {
    AsyncStorage.multiRemove(['userId', 'accessToken', 'isLogged'])
    setIsLogged(false)
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <Text style={theme.title}>Mes identifiants</Text>
      <Text style={theme.legend}>Pseudo</Text>
      <Text style={theme.legend}>Mot de passe</Text>
      <Button title="Modifier mes identifiants" onPress={() => setModalVisibility(!modalVisibility)} />
    </View>
  )
}
