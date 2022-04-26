import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, StatusBar, View, Text, ScrollView, LogBox } from 'react-native'
import { List } from 'react-native-paper'
import { theme } from '../styles/theming'
import { API } from '../utils/api'
import Context from '../utils/context/Context'
import parseISO from 'date-fns/parseISO'


// Composants
import Header from '../components/Header'
import EventCardLight from '../components/EventCardLight'
import Tiles from '../components/Tiles'
import ButtonOutlined from '../components/ButtonOutlined'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  const [user, setUser] = useState({})
  const [events, setEvents] = useState([])
  const { getUserId, isStaff } = useContext(Context)
  const getUser = async () => {
    try {
      const storedUser = await getUserId()
      API.get(`/getUser/${storedUser.id}`)
        .then(res => setUser(res.data))
    } catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  const getEvents = async () => {
    try {
      API.get('/getAllEvents')
        .then(res => setEvents(res.data))
    } catch (error) {
      console.log('error', error)
    }
  }

  const getCustomerEvents = async () => {
    try {
      const storedUser = await getUserId()
      API.get(`/getAllEventsFromCustomer/${storedUser.id}`)
        .then(res => setEvents(res.data))
    } catch (error) {
      console.log('error', error)
    }
  }

  const displayEvent = (list, range) => {
    let display
    if (range === 'past') {
      display = list.filter(event => parseISO(event.eventDescription.startDate) < new Date())
    } else if (range === 'future') {

      display = list.filter(event => parseISO(event.eventDescription.startDate) > new Date())
    }

    return display
      .sort((a, b) => (a.eventDescription.startDate < b.eventDescription.startDate) ? -1 : 1)
      .slice(0,2)
      .map((e,i) => <EventCardLight style={{padding:'10px'}} event={e} key={i} /> )
  }

  useEffect(() => {
    getUser()
    isStaff ? getEvents() : getCustomerEvents()
  }, [])

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView overScrollMode="never">
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        <StatusBar style="auto" />
        {user ? <Header user={user} /> : null}
        <View style={{
          flex: 6,
          marginHorizontal: 30,
        }}>
          <View style={styles.tiles}>
            <Tiles title='Events' icon='creation' onPress={() => { navigation.navigate('ListEvents', { events }) }} />
            <Tiles title='Agenda' icon='calendar' onPress={() => { navigation.navigate('Calendar') }} />
            <Tiles title='Fichiers' icon='file-document-outline' onPress={() => { navigation.navigate('Documents') }} />
            <Tiles title='Budget' icon='chart-bar' onPress={() => { navigation.navigate('ListEvents', { events, budget:true }) }} />
          </View>
          <View style={{
            flex: 3,
          }}>
            <List.Section style={{ marginTop: -20 }}>
              <List.Accordion
                title="Évènements en cours"
                titleStyle={theme.title_3}
                expanded={expanded}
                onPress={handlePress}
              >
                {displayEvent(events, 'future')}
                <View>
                  <ButtonOutlined title="Voir plus" onPress={() => navigation.navigate('ListEvents')} />
                </View>
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
                {displayEvent(events, 'past')}
                <View>
                  <ButtonOutlined title="Voir plus" onPress={() => navigation.navigate('ListEvents')} />
                </View>
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
      </View >
    </ScrollView>

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
