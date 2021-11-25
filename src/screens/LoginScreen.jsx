import React, { useContext } from 'react'
import { View, StatusBar, Image, StyleSheet } from 'react-native'
import { API } from '../utils/api'
import Context from '../utils/context/Context'
import LoginForm  from '../components/LoginForm'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginScreen () {
  const [ isLogged, setIsLogged ] = useContext(Context)

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
        await AsyncStorage.setItem('isLogged', 'true')
        setIsLogged(true)
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
        <StatusBar
        animated={true}
        translucent
        backgroundColor={"transparent"}
      />
      {/* <Image
        source={require('../assets/img/ConvivioBlanc.png')}
        style={styles.logo}
        resizeMode='contain'
      >
      </Image> */}
      <LoginForm sendLoginRequest={sendLoginRequest}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  coverImage: {
    width: '100%',
    height: 850,
  },

  darkness: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: 850,
  },

  logo: {
    width: '70%',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    top: 150,
  },
})
