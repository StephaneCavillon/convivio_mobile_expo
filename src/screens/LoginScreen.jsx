import React, { useContext } from 'react'
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native'
import { API } from '../utils/api'
import { theme } from '../styles/theming'
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
    <View style={styles.container}>
        <StatusBar
        animated={true}
        translucent
        backgroundColor={"transparent"}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/img/ConvivioBlanc.png')}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={{
          alignSelf: 'flex-end',
          color: theme.colors.pureWhite,
          fontSize: 15,
          right: '15%',
          top: -15
          }}
        >
          Agence évènementielle
        </Text>
      </View>
      <View style={{justifyContent:'center', marginTop:'15%'}}>
        <Text >Se connecter </Text>
        <LoginForm sendLoginRequest={sendLoginRequest}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.falseBlack,
    height: '100%',
    paddingTop: '10%'
  },
  imageContainer: {
    alignItems: 'center'
  },
  text: {
    color: theme.colors.pureWhite,
    fontSize:25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  logo: {
    width: '70%',
    justifyContent: 'center',
    marginBottom:0
  },
})
