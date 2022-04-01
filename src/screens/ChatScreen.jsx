import React from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper'
import { theme } from '../styles/theming'

export default function Chat({navigation}) {
  return(
    <View style={{flex: 1}}>
      <View>
        <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
          <Appbar.BackAction onPress={ () => {navigation.navigate('Dashboard') }} />
          <Appbar.Content title="Messages" />
        </Appbar.Header>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 20, flex: 1}}>
        <Text>
          ChatScreen
        </Text>
      </View>
    </View>
  )
}