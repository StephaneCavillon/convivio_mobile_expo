import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import { theme } from '../styles/theming'
import UserAvatar from '../components/UserAvatar'
import Context from '../utils/context/Context'
import { API } from '../utils/api'

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

  console.log(user)

  return(
    <View style={theme.colors.background, {flex:1}}>
        <Header userScreen={true}/>
        {user ? (
          <UserAvatar user={user}/>
        ):null}

        <Text>Coucou</Text>
    </View>
  )
}