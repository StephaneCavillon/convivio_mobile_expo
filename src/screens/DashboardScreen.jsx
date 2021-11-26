import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import { API } from '../utils/api';

export default function Dashboard({navigation}) {
  const userId = AsyncStorage.getItem('userId').then(d => d),
  const accessToken = AsyncStorage.getItem('accessToken').then(d => d),
  const config = {
    headers:{'Authorization': `Bearer ${accessToken}`}
  },
  const user = await API.get(`/getUser/${userId}`, config)

  return(
    <View style={{backgroundColor: theme.colors.background, height: '100%'}}>
      <StatusBar style="auto" />
      <Header user={user} />
    </View>
  )
}
