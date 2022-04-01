import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'
import { Card, Paragraph, List } from 'react-native-paper'
import { theme } from '../styles/theming'
import { API } from '../utils/api'
import Context from '../utils/context/Context'

// Composants
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  const [user, setUser] = useState({})
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

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <StatusBar style="auto" />
      {user ? <Header user={user} /> : null}
      <View style={{
        flex: 6,
        marginHorizontal: 30,
      }}>
        <View style={styles.tiles}>
          <Tiles title='Events' icon='creation' onPress={() => { navigation.navigate('ListEvents') }} />
          <Tiles title='Agenda' icon='calendar' onPress={() => { navigation.navigate('Calendar') }} />
          <Tiles title='Fichiers' icon='file-document-outline' onPress={() => { navigation.navigate('Documents') }} />
          <Tiles title='Budget' icon='chart-bar' onPress={() => { navigation.navigate('Budget') }} />
        </View>
        <View style={{
          flex: 3,
        }}>
          <List.Section>
            <List.Accordion
              title="Évènements en cours"
              titleStyle={theme.title_3}
              expanded={expanded}
              onPress={handlePress}
            >
              <Card style={theme.card}>
                <Card.Title title="Nom de l'évènement" subtitle="Nom de l'entreprise" />
                <Card.Content>
                  <Paragraph>Date prévue : </Paragraph>
                  <Paragraph>Lieu : </Paragraph>
                  <View style={{ marginTop: 5 }}>
                    <Text>Statut :
                      <View>
                        <Text style={theme.chip}>Exemple</Text>
                      </View>
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </List.Accordion>
          </List.Section>
        </View>
        <View style={{
          flex: 2,
        }}>
          <List.Section>
            <List.Accordion
              title="Évènements passés"
              titleStyle={theme.title_3}
            >
              <Card style={theme.card}>
                <Card.Title title="Nom de l'évènement" subtitle="Nom de l'entreprise" />
                <Card.Content>
                  <Paragraph>Date prévue : </Paragraph>
                  <Paragraph>Lieu : </Paragraph>
                  <View style={{ marginTop: 5 }}>
                    <Text>Statut :
                      <View>
                        <Text style={theme.chip}>Exemple</Text>
                      </View>
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </List.Accordion>
          </List.Section>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Button title="Besoin d'aide ?" onPress={() => navigation.navigate('Contact')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tiles: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
