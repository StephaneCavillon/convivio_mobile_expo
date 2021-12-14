import React, { useEffect, useState, useContext } from 'react'
import { StatusBar, View } from 'react-native'
import { theme } from '../styles/theming'
import { API } from '../utils/api'
import Context from '../utils/context/Context'

// Composants
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import Button from '../components/Button'

export default function Dashboard({navigation}) {
  const [ user, setUser ] = useState({})
  const { getUserId } = useContext(Context)
  const getUser = async () => {
    try{
      const storedUser = await getUserId()
      const user = await API.get(`/getUser/${ storedUser.id }`)
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
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: '6%',
        marginRight: '6%',
      }}>
        <Tiles icon='creation'/>
        <Tiles icon='calendar' onPress = { () => {navigation.navigate('Calendar') }}/>
        <Tiles icon='file-document-outline'/>
        <Tiles icon='chart-bar'/>
      </View>
      <Button title="Besoin d'aide ?" onPress = { () => navigation.navigate('Contact') } />
art    </View>
  )
}
