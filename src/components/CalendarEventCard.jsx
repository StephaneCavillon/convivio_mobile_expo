import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { navigate } from '../navigation/RootNavigation'
import { theme } from '../styles/theming'


export function CalendarEventCard (props) {
  const { item, firstItemInDay } = props

  return (
    <TouchableOpacity
      style={firstItemInDay ? styles.firstItemInDay : styles.item}
      onPress={() => console.log('go to event')}
      // onPress={() => navigate('EventsScreen', { eventId: item.id }) }
    >

      <View style={{ justifyContent:'space-evenly',  fontWeight:'bold'}}>
        <Text style={ styles.time }>{item.start} </Text>
        <Text style={ styles.time }>{item.end} </Text>
      </View>
      <View style={{ paddingLeft: 10, justifyContent: 'space-evenly' }}>
        <Text style={{color: theme.colors.falseBlack, fontWeight:'bold'}}>{item.title}</Text>
        <Text style={{color: theme.colors.falseBlack}}>{item.firstname} {item.lastname}</Text>
        <Text style={{color: theme.colors.falseBlack}}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  firstItemInDay: {
    marginTop:30,
    marginBottom:5,
    height: 70,
    paddingHorizontal:10,
    paddingBottom:5,
    backgroundColor: theme.colors.pureWhite,
    alignContent:'flex-end',
    flexDirection:'row',
  },
  item: {
    marginBottom:5,
    height: 70,
    paddingHorizontal:10,
    paddingBottom:5,
    backgroundColor: theme.colors.pureWhite,
    alignContent:'flex-end',
    flexDirection:'row',
  },
  time: {
    color: theme.colors.falseBlack,
    justifyContent:'space-evenly',
    fontWeight:'bold'
  },
})
