import React from 'react'
import { View } from 'react-native'
import { API } from '../utils/api'
import LoginForm  from '../components/LoginForm'
import AsyncStorage from '@react-native-async-storage/async-storage'

import TabNavigation from '../navigation/TabNavigation'

export default function LoginScreen () {
  async function sendLoginRequest (credentials) {
    const data = {
      pseudo: credentials.pseudo,
      password: credentials.password,
      remember: credentials.remember
    }
    try {
      const user = await API.post('/api/login', data)
      if (user.status === 200) {
        await registerToken(user)
        await AsyncStorage.setItem('userId', user.data.user._id)
        // history.push('/') // redirect to home page
      } else {
        console.log(user.statusText) // Status message from server response
      }
    } catch (error) {
      // handle error with user not found sign up ?
      console.log('error', error.message)
    }
  }

  async function registerToken(user) {
    // registering of refreshToken in localstorage
    await AsyncStorage.setItem('accessToken', JSON.stringify(user.data.accessToken))
  }

  return (
    <View>
      <LoginForm sendLoginRequest={sendLoginRequest}/>
      <TabNavigation />
    </View>
  )
}