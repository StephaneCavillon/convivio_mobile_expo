import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { API } from '../utils/api'

//@todo securité si user.Role === customer vérifier que l'id de l'user de l'évent est identique
// /!\ sortie d'async storage en string

export default function EventScreen ({route}) {
  const [ event, setEvent ] = useState({})
  const eventId  = route.params.eventId

  const getEvent = async () => {
    try{
      API.get(`/getEvent/${ eventId }`)
        .then(res => {
          setEvent(res.data)
        })
    } catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <View>
      <Text> Event Screen </Text>
      <Text> titre{ event.eventTitle } </Text>
    </View>
  )
}

