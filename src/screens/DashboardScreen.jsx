import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import Header from '../components/Header'


export default function Dashboard({navigation}) {
  return(
    <View style={{backgroundColor: theme.colors.background, height: '100%'}}>
      <StatusBar style="auto" />
      <Header />
    </View>
  )
}
