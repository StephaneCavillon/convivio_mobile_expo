import axios from 'axios'
import * as RootNavigation from '../navigation/RootNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@env'

export const API = axios.create({
  baseURL: API_URL
})

API.interceptors.request.use(
  async (config) => {
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
  return response
}, async function (error) {
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