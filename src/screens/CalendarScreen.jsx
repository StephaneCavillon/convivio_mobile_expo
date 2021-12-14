import React, { useEffect, useContext, useState } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars'
import Context from '../utils/context/Context'
import { API } from '../utils/api'

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
}
LocaleConfig.defaultLocale = 'fr'

export default function CalendarScreen() {
  const [ events, setEvents ] = useState([])
  const { getUserId } = useContext(Context)
  // get EventList for the connected user
  const getEvents = async () => {
    try{
      const storedUser = await getUserId()
      if(storedUser.role === 'staff'){
        API.get(`/getAllEvents`)
          .then((response => setEvents(response.data)))
      } else {
        API.get(`/getAllEventsFromCustomer/${ storedUser.id }`)
          .then((response => setEvents(response.data)))
      }
      //@todo format event to fit calendar events format

    }catch (err) {
      console.log('error', err.response.request._response)
    }
  }
  useEffect(() => {
    getEvents()
  }, [])

  return (
    <Agenda
      firstDay={1}
    />
  )
}
