import React, { useEffect, useContext, useState } from 'react'
import { View } from 'react-native'
import { Appbar} from 'react-native-paper'
import { Agenda } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'
import Context from '../utils/context/Context'
import { API } from '../utils/api'
import { theme } from '../styles/theming'
import { CalendarEventCard } from '../components/CalendarEventCard'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
}
LocaleConfig.defaultLocale = 'fr'

export default function CalendarScreen({navigation}) {
  const [ events, setEvents ] = useState([])
  const { getUserId } = useContext(Context)

  const formatItems = (events) => {
    return events.map( event => {
      return {
        [format(parseISO(event.eventDescription.startDate), 'yyyy-MM-dd')]: { // startDate format yyyy-MM-dd
          eventId: event._id,
          title: event.eventTitle,
          start: format(parseISO(event.eventDescription.startDate),'HH-mm'), // startDate format HH-mm
          end: format(parseISO(event.eventDescription.endDate),'HH-mm'), // startDate format HH-mm
          firstname: event.user.firstname,
          lastname: event.user.lastname,
          location: event.eventDescription.city
        }
      }
    }).reduce((acc, current) => { // groupBy startDate
      const key = Object.keys(current)
      if(!acc[key]){
        acc[key]= []
      }
      acc[key].push(current[key])
      return acc
    }, {})
  }

  const getEventsList = async () => {
    try{
      const storedUser = await getUserId()
      if(storedUser.role === 'staff'){
        API.get(`/getAllEvents`)
          .then(response => setEvents(response.data))
      } else {
        API.get(`/getAllEventsFromCustomer/${ storedUser.id }`)
          .then(response => setEvents(response.data))
      }
    }catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  useEffect(() => {
    if(events.length === 0) {
      getEventsList()
    }
  }, [events])

  return (
    <View style={{flex: 1}}>
      <View>
        <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
          <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
          <Appbar.Content title="Agenda" />
        </Appbar.Header>
      </View>
      <Agenda
        firstDay={1}
        theme={{
          selectedDayBackgroundColor: theme.colors.orange,
          todayTextColor: theme.colors.orange,
          dotColor: theme.colors.orange,
        }}
        pastScrollRange={24}
        items={ events.length !== 0 ? formatItems(events) : {}}
        renderItem={(item, firstItemInDay) => <CalendarEventCard item={item} firstItemInDay={firstItemInDay} />}
      />
    </View>
  )
}
