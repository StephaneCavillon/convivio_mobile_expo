import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
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
    <View style={{flex: 1}}>
    <View>
      <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
        <Appbar.BackAction onPress={ () => { navigation.goBack() }} />
        <Appbar.Content title="Options" />
      </Appbar.Header>
    </View>
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 2}}>
      <Text style={theme.legend}>Compte</Text>
      <TouchableOpacity style={theme.containerOptions} onPress={ () => {navigation.navigate('Profile') }} >
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
      </TouchableOpacity>
      <TouchableOpacity style={theme.containerOptions} onPress={ () => {navigation.navigate('Credentials') }}>
        <View style={{flexDirection: 'row'}} >
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
      </TouchableOpacity>  
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
      <LogoutModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        logout={logout}
      />
      <View style={{flex: 0.6}}>
        <Button title="Déconnexion" onPress={() => setModalVisibility(!modalVisibility)} />
      </View>
    </View>
  </View>
  )
}
