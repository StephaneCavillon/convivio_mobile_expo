import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, StatusBar, View, Text } from 'react-native'
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
      API.get(`/getUser/${ storedUser.id }`)
        .then(res => setUser( res.data))
    }catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return(
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <StatusBar style="auto" />
      { user ? <Header user={ user } /> : null }
      <View style={{
        flex: 5,
        marginHorizontal: 30,
        }}>
        <View style={styles.tiles}>
          <Tiles icon='creation' onPress = { () => {navigation.navigate('ListEvents') }}/>
          <Tiles icon='calendar' onPress = { () => {navigation.navigate('Calendar') }}/>
          <Tiles icon='file-document-outline' onPress = { () => {navigation.navigate('Documents') }}/>
          <Tiles icon='chart-bar' onPress = { () => {navigation.navigate('Budget') }}/>
        </View>
        <View style={{
          flex: 3,
        }}>
          <Text style={styles.title}>Évènement(s) en cours</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Button title="Besoin d'aide ?" onPress = { () => navigation.navigate('Contact') } />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tiles: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
