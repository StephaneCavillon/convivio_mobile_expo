import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text } from 'react-native'
import { LogoutModal } from '../components/LogoutModal'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../styles/theming'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Options({navigation}) {
  const { isLogged, setIsLogged } = useContext(Context)
  const [ modalVisibility, setModalVisibility ] = useState(false)

  async function logout() {
    AsyncStorage.multiRemove(['userId', 'accessToken', 'isLogged'])
    setIsLogged(false)
  }

  return(
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <Text style={theme.title}>Options</Text>
      <Text style={theme.legend}>Compte</Text>
      <View style={theme.containerOptions}>
        <Text style={{
          color: theme.colors.backdrop}}>
          <MaterialCommunityIcons name="account" size={20} />
        </Text>
        <Text style={{
          paddingLeft: 10, 
          fontSize: 16, 
          color: theme.colors.backdrop
        }}>
          Mes informations
        </Text>
      </View>
      <View style={theme.containerOptions}>
        <Text style={{
          color: theme.colors.backdrop}}>
          <MaterialCommunityIcons name="key" size={20} />
        </Text>
        <Text style={{
          paddingLeft: 10, 
          fontSize: 16, 
          color: theme.colors.backdrop
        }}>
          Mes identifiants
        </Text>
      </View>  
      <Text style={theme.legend}>Préférences</Text>
      <View style={theme.containerOptions}>
        <Text style={{
          color: theme.colors.backdrop}}>
          <MaterialCommunityIcons name="bell" size={20} />
        </Text>
        <Text style={{
          paddingLeft: 10, 
          fontSize: 16, 
          color: theme.colors.backdrop
        }}>
          Recevoir les notifications
        </Text>
      </View>
      <View style={theme.containerOptions}>
        <Text style={{
          color: theme.colors.backdrop}}>
          <MaterialCommunityIcons name="moon-waning-crescent" size={20} />
        </Text>
        <Text style={{
          paddingLeft: 10, 
          fontSize: 16, 
          color: theme.colors.backdrop,
        }}>
          Dark Mode
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Button title="Accès au profil utilisateur" onPress={ () => {navigation.navigate('Profile') }}/>
      </View>
        <LogoutModal
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
          logout={logout}
        />
        <Button title="Déconnexion" onPress={() => setModalVisibility(!modalVisibility)} />
    </View>
  )
}
