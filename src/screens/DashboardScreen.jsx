import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect, useState} from 'react'
import { StatusBar, Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../styles/theming'
import { API } from '../utils/api'
import Header from '../components/Header'

export default function Dashboard({navigation}) {
  const [user, setUser ] = useState({})

  const getUserId = async () => {
    return await AsyncStorage.getItem('userId')
  }

  const getAccessToken = async () => {
    return await AsyncStorage.getItem('accessToken')
  }

  const getUser = async () => {
    const config = {
      headers: {'Authorization': `Bearer ${await getAccessToken()}`}
    }
    try{
      const user = await API.get(`/getUser/${ await getUserId()}`, config)
      setUser(await user.data)
    }catch (err) {
      console.log(err.response)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return(
    <View style={{backgroundColor: theme.colors.background, height: '100%'}}>
      <StatusBar style="auto" />
      <Header user={ user } />
    </View>
  )
}
