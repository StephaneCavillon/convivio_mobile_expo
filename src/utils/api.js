import axios from 'axios'
import * as RootNavigation from '../navigation/RootNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@env'

export const API = axios.create({
  baseURL: API_URL
})

// @todo interceptor pour la requete et pour la response

API.interceptors.request.use(
  async (config) => {
    // console.log('request interceptor good')
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
      return Promise.reject(error);
  }
)

API.interceptors.response.use( function (response) {
  // console.log(' response interceptor good')
  return response
}, async function (error) {
  // console.log('response interceptor bad')
  if (error.response) {
    if (error.response.status === 401) {
      await AsyncStorage.removeItem('accessToken')
      await AsyncStorage.removeItem('isLogged')

      RootNavigation.navigate('Login') // redirect to login page
    } else {
      return error.response
    }
  }
})