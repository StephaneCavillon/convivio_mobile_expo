import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect, useState} from 'react'
import { StatusBar, View } from 'react-native'
import { theme } from '../styles/theming'
import { API } from '../utils/api'
import Header from '../components/Header'

export default function Dashboard({navigation}) {
  const [user, setUser ] = useState({})
  const getUserId = async () => {
    return await AsyncStorage.getItem('userId')
  }
  const getUser = async () => {
    try{
      const user = await API.get(`/getUser/${ await getUserId()}`)
      setUser(await user.data)
    }catch (err) {
      console.log('error', err.response.request._response)
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
