import React, { useEffect, useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { TextInput, List, Appbar } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../styles/theming'
import Context from '../utils/context/Context'
import { API } from '../utils/api'

// Import composants
import Header from '../components/Header.js'
import Button from '../components/Button'
import UserAvatar from '../components/UserAvatar'

export default function userProfile({ navigation }) {
  const [user, setUser] = useState(null)
  const { getUserId } = useContext(Context)
  const getUser = async () => {
    try {
      const storedUser = await getUserId()
      API.get(`/getUser/${storedUser.id}`)
        .then(res => setUser(res.data))
    } catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbar.Header style={{ backgroundColor: theme.colors.backdrop }}>
          <Appbar.BackAction onPress={() => { navigation.goBack() }} />
          <Appbar.Content title="Vos informations" />
        </Appbar.Header>
      </View>
      <ScrollView overScrollMode="never">
        <View style={{ backgroundColor: theme.colors.background, flex: 2 }}>
          <Header
            userScreen={true}
          />
          <View style={{ marginHorizontal: 20, flex: 7 }}>
            <View style={{
              flexDirection: "column",
              alignItems: "center",
              top: -55,
            }}>
              {user ? (
                <UserAvatar user={user} />
              ) : null}
              <Text style={theme.titleTop}>
                Nom d'utilisateur
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: 'column',
                marginTop: -25,
              }}
            >
              <Text style={{ fontSize: 15, paddingBottom: 5, color: theme.colors.falseBlack }}>Nom</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="Dupont"
                autoCapitalize='sentences'
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <Text style={theme.label}>Prénom</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="Jean"
                autoCapitalize='sentences'
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <Text style={theme.label}>Numéro de téléphone</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="Ex : 0689245115"
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <Text style={theme.label}>E-mail de contact</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="jeandupont@monemail.fr"
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <Text style={theme.label}>Entreprise</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="Mon entreprise"
                autoCapitalize='sentences'
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <Text style={theme.label}>Adresse de l'entreprise</Text>
              <TextInput
                style={theme.input}
                selectionColor={theme.colors.orange}
                theme={{ colors: { primary: theme.colors.orange } }}
                placeholder="Ex : 70 rue des Jacobins, 80000 Amiens"
                autoCapitalize='sentences'
                right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
              />
              <List.Section style={{ marginTop: 30 }}>
                <List.Accordion
                  title="Complément d'adresse"
                  titleStyle={theme.title_2}
                >
                  <Text style={theme.label}>Complément d'adresse</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    placeholder="Ex : Bâtiment C"
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  <Text style={theme.label}>Étage</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    placeholder="Ex : 3"
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  <Text style={theme.label}>Lieu-dit</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    placeholder="Ex : Tour Eiffel"
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                </List.Accordion>
              </List.Section>
              <View style={{ flex: 0.6 }}>
                <Button
                  title="Mettre à jour"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}