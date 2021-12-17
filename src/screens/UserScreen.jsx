import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper'
import { theme } from '../styles/theming'
import UserAvatar from '../components/UserAvatar'
import Context from '../utils/context/Context'
import { API } from '../utils/api'

// Import composants
import Header from '../components/Header.js'

export default function userProfile () {
  const [ user, setUser ] = useState(null)
  const { getUserId } = useContext(Context)
  const getUser = async () => {
    try{
      const storedUser = await getUserId()
      API.get(`/getUser/${ storedUser.id }`)
        .then(res => setUser(res.data))
    }catch (err) {
      console.log('error', err.response.request._response)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])

  return(
    <View style={theme.colors.background, {flex:1}}>
      <Header userScreen={true}/>
      <View style={{marginHorizontal: 30, flex: 6,}}>
        <View style={{
          flexDirection: "column",
          alignItems: "center",
          top: -50,
          }}>
          {user ? (
            <UserAvatar user={user} />
          ):null}
          <Text style={theme.titleTop}>
            Votre profil utilisateur
          </Text>
        </View>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}>
          <Button 
            title="Modifier"
            onPress = { () => navigation.navigate('Contact') }
            />
        </View>
      </View>
    </View>
  )
}