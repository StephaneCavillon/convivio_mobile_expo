import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Appbar, Avatar, RadioButton } from 'react-native-paper'
import { theme } from '../styles/theming'
import { API } from '../utils/api'

// Import composants
import Header from '../components/Header.js'

//@todo securité si user.Role === customer vérifier que l'id de l'user de l'évent est identique
// /!\ sortie d'async storage en string

export default function EventScreen({ navigation }) {
  // const [ event, setEvent ] = useState({})
  // const eventId  = route.params.eventId

  // const getEvent = async () => {
  //   try{
  //     API.get(`/getEvent/${ eventId }`)
  //       .then(res => {
  //         setEvent(res.data)
  //       })
  //   } catch (err) {
  //     console.log('error', err.response.request._response)
  //   }
  // }

  // useEffect(() => {
  //   getEvent()
  // }, [])

  const [value, setValue] = React.useState('first');

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbar.Header style={{ backgroundColor: theme.colors.backdrop }}>
          <Appbar.BackAction onPress={() => { navigation.goBack() }} />
          <Appbar.Content title="Détail de l'évènement" />
        </Appbar.Header>
      </View>
      <ScrollView overScrollMode="never">
        <View style={{ backgroundColor: theme.colors.background, flex: 2 }}>
          <Header
            userScreen={true}
          />
          <View style={{ marginHorizontal: 20, flex: 7, marginVertical: 20 }}>
            <View style={{
              flexDirection: "column",
              alignItems: "center",
              top: -55,
            }}
            >
              <Avatar.Icon size={100} icon="creation" backgroundColor={theme.colors.orange} />
              <Text style={theme.titleTop}>
                Convention d'entreprise
              </Text>
              <Text style={theme.title_enterprise}>
                LA MANU - École Supérieure des Métiers du Numérique
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: 'column',
                marginTop: -25,
              }}>
              <View>
                <Text style={theme.label_2}>
                  Type d'évènement
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Description de l'évènement
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Lieu
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Confidentialité
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                  <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item color={theme.colors.orange} label="Privé" value="first" />
                    <RadioButton.Item color={theme.colors.orange} label="Public" value="second" />
                  </RadioButton.Group>
                </Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Nombre de personnes attendues
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Budget alloué par l'entreprise
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Statut
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Dernière modification en date
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>LA MANU</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

