import React, {useContext, useEffect, useState} from 'react'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import Filter from '../components/Filter'
import { List } from 'react-native-paper'
import EventCardLight from '../components/EventCardLight'
import { Appbar } from 'react-native-paper'
import { theme } from '../styles/theming'
import parseISO from 'date-fns/parseISO'


export default function ListEvents({navigation, route}) {
  const events = route.params.events
  const budget = route.params.budget
  const [ pastEvent, setPastEvent ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ title, setTitle ] = useState("Liste des évènements")


  const goTo = (event) => {
    const name = budget ? 'Budget' : 'Event'
    navigation.navigate(name, { event: event })
  }

  const displayEvent = () => {
    let display
    if(pastEvent) {
      display = events
    } else {
      display = events.filter(event => parseISO(event.eventDescription.startDate) > new Date())
    }

    return display
      .sort((a, b) => (a.eventDescription.startDate < b.eventDescription.startDate) ? -1 : 1)
      .map((e,i) => <EventCardLight style={{padding:'10px'}} event={e} key={i} goTo={goTo} displayStatus={ budget ? false : true } /> )
  }

  useEffect(() => {
    events ? setLoading(false) : setLoading(true)
    budget ? setTitle("Choix de l'évènement") : setTitle("Liste des évènements")
  }, events)

  return(
    <ScrollView overScrollMode="never">
      <View>
        <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
          <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
          <Appbar.Content title={title} />
        </Appbar.Header>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
        <Filter pastEvent={pastEvent} setPastEvent={setPastEvent} />
        { loading ?
        <ActivityIndicator color={theme.colors.orange}/> :
        <View style={{
          flex: 3,
        }}>
          <List.Section style={{ marginTop: -20 }}>
            { displayEvent() }
          </List.Section>
        </View>
      }
      </View>
    </ScrollView>
  )
}