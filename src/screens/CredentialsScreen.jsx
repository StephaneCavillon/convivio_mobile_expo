import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text } from 'react-native'
import { TextInput, Title, Appbar } from 'react-native-paper'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { theme } from '../styles/theming'

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
    <View style={{flex: 1}}>
    <View>
      <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
        <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
        <Appbar.Content title="Vos identifiants de connexion" />
      </Appbar.Header>
    </View>
    <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
      <View style={{flex: 2}}>
        <Text style={theme.label}>Pseudo de connexion</Text>
        <TextInput 
          style={theme.input}
          selectionColor={theme.colors.orange}
          theme={{colors: {primary: theme.colors.orange}}}
        />
        <Text style={theme.label}>Votre mot de passe actuel</Text>
        <TextInput 
          type='password'
          style={theme.input}
          selectionColor={theme.colors.orange}
          theme={{colors: {primary: theme.colors.orange}}}
          right={<TextInput.Icon name="pencil" color={theme.colors.orange} onPress = { () => navigation.navigate('Password') }/>}
        />
      </View>
      <View style={{flex: 1.}}>
        <Title style={theme.legend_2}>Information</Title>
        <Text style={theme.paragraph}>
          L'identifiant et le mot de passe étant générés par l'agence à la création de votre compte client, seul le mot de passe est ensuite modifiable dans l'application.
        </Text>
        <Button title="Besoin d'aide ?" onPress = { () => navigation.navigate('Contact') } />
      </View>
    </View>
  </View>
  )
}
