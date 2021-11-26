import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import { API } from '../utils/api';

export default async function Dashboard({navigation}) {
  const userId = await AsyncStorage.getItem('userId')
  const accessToken = await AsyncStorage.getItem('accessToken')
  // const config = {
  //   headers:{'Authorization': `Bearer ${accessToken}`}
  // }
  const user = await API.get(`/getUser/${userId}`, config)
  
  console.log(user)
  return(
    <View style={{backgroundColor: theme.colors.background, height: '100%'}}>
      <StatusBar style="auto" />
      <Header user={user} />
    </View>
  )
}
