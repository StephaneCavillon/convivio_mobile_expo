import React, { useState, useContext } from 'react'
import Context from '../utils/context/Context'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput, Title } from 'react-native-paper'
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
      <View style={{flex: 1}}>
        <Text style={theme.title}>Vos identifiants</Text>
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
          right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
        />
      </View>
      <View style={{flex: 1.5}}>
        <Title style={theme.legend_2}>Information</Title>
        <Text style={theme.paragraph}>
          L'identifiant et le mot de passe étant générés par l'agence à la création de votre compte client, seul le mot de passe est ensuite modifiable dans l'application.
        </Text>
      </View>
      <View style={{
          flex: 0.25,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Button title="Besoin d'aide ?" onPress = { () => navigation.navigate('Contact') } />
        </View>
    </View>
  )
}
