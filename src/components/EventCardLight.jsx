import React from 'react'
import { Card, Paragraph } from 'react-native-paper'
import {  View, Text  } from 'react-native'
import { theme } from '../styles/theming'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { status } from '../utils/status'


export default function EventCardLight ({ event }) {
  return (
  <Card style={theme.card}>
    <Card.Title title={event.eventTitle} subtitle={event.user.company?.name} />
    <Card.Content>
      <Paragraph>Date prévue : {format(parseISO(event.eventDescription.startDate), 'dd/MM/yyyy')} - {format(parseISO(event.eventDescription.endDate), 'dd/MM/yyyy')} </Paragraph>
      <Paragraph>Lieu : {event.eventDescription.city} </Paragraph>
      <View style={{ marginTop: 5 }}>
        <Text>Statut :
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={theme.chip}> { status[event.status?.status] ?? 'à déterminer'} </Text>
          </View>
        </Text>
      </View>
    </Card.Content>
  </Card>

  )
}