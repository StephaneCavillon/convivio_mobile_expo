import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text, Switch } from 'react-native'
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <Text style={theme.title}>Options</Text>
      <Text style={theme.legend}>Compte</Text>
      <View style={theme.containerOptions}>
        <View style={{flexDirection: 'row'}}>
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
      </View>
      <View style={theme.containerOptions}>
        <View style={{flexDirection: 'row'}}>
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
      </View>  
      <Text style={theme.legend}>Préférences</Text>
      <View style={theme.containerOptions}>
        <View style={{flexDirection: 'row'}}>
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
        <Switch
          trackColor={{ false: theme.colors.disabled, true: theme.colors.paleOrange }}
          thumbColor={isEnabled ? theme.colors.orange : theme.colors.pureWhite}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={theme.containerOptions}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{
            color: theme.colors.backdrop}}>
            <MaterialCommunityIcons name="moon-waning-crescent" size={20} />
          </Text>
          <Text style={{
            paddingLeft: 10, 
            fontSize: 16, 
            color: theme.colors.backdrop,
          }}
          >
            Dark Mode
          </Text>
        </View>
        <Switch
          trackColor={{ false: theme.colors.disabled, true: theme.colors.paleOrange }}
          thumbColor={isEnabled ? theme.colors.orange : theme.colors.pureWhite}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{marginTop: 30}}>
        <Button title="Mon profil" onPress={ () => {navigation.navigate('Profile') }}/>
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
