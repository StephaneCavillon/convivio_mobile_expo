import React from 'react'
import { View, Text, Switch } from 'react-native'
import { theme } from '../styles/theming'


export default function Filter(props) {
  console.log('props', props)
  const { pastEvent, setPastEvent } = props

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 20 }}
      >
      <Text style={{
            paddingLeft: 10,
            fontSize: 16,
            color: theme.colors.backdrop}}
      >Voir les évènements passés</Text>
      <Switch
        trackColor={{ false: theme.colors.disabled, true: theme.colors.paleOrange }}
        thumbColor={pastEvent ? theme.colors.orange : theme.colors.pureWhite}
        onChange={ () => setPastEvent(!pastEvent) }
        value={pastEvent}
        />
    </View>
  )
}