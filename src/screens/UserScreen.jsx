import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, Checkbox, List} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../styles/theming'
import Context from '../utils/context/Context'
import { API } from '../utils/api'

// Import composants
import Header from '../components/Header.js'
import Button from '../components/Button'
import UserAvatar from '../components/UserAvatar'



export default function userProfile () {
  const [ user, setUser ] = useState(null)
  const { getUserId } = useContext(Context)
  const getUser = async () => {
    try{
      const storedUser = await getUserId()
      API.get(`/getUser/${ storedUser.id }`)
        .then(res => setUser(res.data))
    }catch (err) {
      console.log('error', err.response.request._response)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  return(
    <View style={{backgroundColor: theme.colors.background, flex:1}} >
      <Header 
        userScreen={true}
      />
      <View style={{marginHorizontal: 30, flex: 6,}}>
        <View style={{
          flexDirection: "column",
          alignItems: "center",
          top: -50,
          }}>
          {user ? (
            <UserAvatar user={user} />
          ):null}
          <Text style={theme.titleTop}>
            Nom d'utilisateur
          </Text>
        </View>
        <ScrollView style={{marginTop: -15}} overScrollMode="never">
        <View 
          style={{
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Text style={{fontSize: 15, paddingBottom: 5, color: theme.colors.falseBlack}}>Nom</Text>
          <TextInput
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="Dupont"
            autoCapitalize='sentences'
          />
          <Text style={theme.label}>Prénom</Text>
          <TextInput 
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="Jean"
            autoCapitalize='sentences'
          />
          <Text style={theme.label}>Numéro de téléphone</Text>
          <TextInput 
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="Ex : 0689245115"
          />
          <Text style={theme.label}>E-mail de contact</Text>
          <TextInput 
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="jeandupont@monemail.fr"
          />
          <Text style={theme.label}>Entreprise</Text>
          <TextInput 
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="Mon entreprise"
            autoCapitalize='sentences'
          />
          <Text style={theme.label}>Adresse de l'entreprise</Text>
          <TextInput 
            style={theme.input}
            selectionColor={theme.colors.orange}
            theme={{colors: {primary: theme.colors.orange}}}
            placeholder="Ex : 70 rue des Jacobins, 80000 Amiens"
            autoCapitalize='sentences'
          />
          <List.Section style={{marginTop: 35}}>
            <List.Accordion
              title="Complément d'adresse"
              titleStyle={theme.title_2}
            >
              <Text style={theme.label}>Complément d'adresse</Text>
              <TextInput 
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{colors: {primary: theme.colors.orange}}}
                placeholder="Ex : Bâtiment C"
                autoCapitalize='sentences'
              />
              <Text style={theme.label}>Étage</Text>
              <TextInput 
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{colors: {primary: theme.colors.orange}}}
                placeholder="Ex : 3"
              />
              <Text style={theme.label}>Lieu-dit</Text>
                <TextInput 
                  style={theme.input}
                  selectionColor={theme.colors.orange}
                  theme={{colors: {primary: theme.colors.orange}}}
                  placeholder="Ex : Tour Eiffel"
                  autoCapitalize='sentences'
                />
            </List.Accordion>
          </List.Section>
          <Button
            title="Mettre à jour"
            onPress = { () => navigation.navigate('Contact') }
            />
        </View>
        </ScrollView>
      </View>
    </View>
  )
}