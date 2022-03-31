import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text } from 'react-native'
import { TextInput, Appbar } from 'react-native-paper'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../styles/theming'

export default function Password({navigation}) {
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
          <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
          <Appbar.Content title="Modifier le mot de passe" />
        </Appbar.Header>
      </View>
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <View style={{flex: 2}}>
        <Text style={theme.label}>Votre nouveau mot de passe</Text>
        <TextInput 
          style={theme.input}
          selectionColor={theme.colors.orange}
          theme={{colors: {primary: theme.colors.orange}}}
          right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
        />
        <Text style={theme.label}>Confirmez le nouveau mot de passe</Text>
        <TextInput 
          style={theme.input}
          selectionColor={theme.colors.orange}
          theme={{colors: {primary: theme.colors.orange}}}
          right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
        />
      </View>
      <View style={{
          flex: 0.25,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Button title="Valider" />
        </View>
      </View>
    </View>  
  )
}