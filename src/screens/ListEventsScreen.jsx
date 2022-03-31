import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper'
import { theme } from '../styles/theming'

export default function ListEvents({navigation}) {
  return(
    <View style={{flex: 1}}>
      <View>
        <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
          <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
          <Appbar.Content title="Évènements" />
        </Appbar.Header>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
        <Text>
          Liste des évènements
        </Text>
      </View>
    </View>
  )
}