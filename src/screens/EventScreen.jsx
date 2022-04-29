import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Appbar, Avatar, RadioButton } from 'react-native-paper'
import { theme } from '../styles/theming'
import { format, parseISO } from 'date-fns'
import { status } from '../utils/status'
// Import composants
import Header from '../components/Header.js'

//@todo securité si user.Role === customer vérifier que l'id de l'user de l'évent est identique
// /!\ sortie d'async storage en string

export default function EventScreen({ navigation, route }) {
  const event = route.params.event

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
                {event.eventTitle}
              </Text>
              <Text style={theme.title_enterprise}>
                {event.user.company?.name}
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
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{event.eventDescription.eventType}</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Description de l'évènement
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{event.eventDescription.description}</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Lieu
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                  {event.eventDescription.address}
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                  {[
                    event.eventDescription.zipcode,
                    event.eventDescription.city
                  ].join(' ')
                  }
                </Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Confidentialité
                </Text>
                <View style={{ fontSize: 16, marginBottom: 5, flexDirection: 'column' }}>
                  <RadioButton.Group >
                    <RadioButton.Item color={theme.colors.orange} label="Privé" status={event.eventDescription.public ? 'unchecked' : 'checked'} />
                    <RadioButton.Item color={theme.colors.orange} label="Public" status={!event.eventDescription.public ? 'unchecked' : 'checked'} />
                  </RadioButton.Group>
                </View>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Nombre de personnes attendues
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{event.eventDescription.numberOfPeople}</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Budget alloué par l'entreprise
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{event.price.budget} €</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Statut
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>{status[event.status.status]}</Text>
              </View>
              <View>
                <Text style={theme.label_2}>
                  Dernière modification en date
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                  {format(parseISO(event.updatedAt || event.createdAt), 'dd/MM/yyyy')}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
