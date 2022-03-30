import React, { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native';
import { theme } from '../styles/theming';
import { useRoute } from '@react-navigation/native'

export default function Header(props) {
  const { user, userScreen } = props
  const [background, setBackground] = useState()
  const route=useRoute().name
  console.log(route, 'route')

  useEffect(() => {
    switch(route){
      case 'Profile' : 
      setBackground(require('../assets/img/statue-museum.jpg'))
      break;
      case 'Dashboard' : 
      setBackground(require('../assets/img/dashboard.jpg'))
      break;
    }
  }, []) 

  // require('../assets/img/dashboard.jpg')

  return(
    <View style={{
      flex: 2,
    }}>
      <Image
        source={background}
        resizeMode='cover'
        style={{
          width: '100%',
          flex: 3,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
      </Image>
      {!userScreen ? (
        <View style={{
        backgroundColor: theme.colors.backdrop,
        flex: 1,
        marginLeft: 29,
        marginRight: 28,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: -25,
        }}
        >
        <Text style={{
          color: theme.colors.pureWhite,
          fontSize: 23,
          fontWeight: 'bold',
        }}>
          Bonjour {user.firstname}
        </Text>
      </View>
      ):null}
    </View>
  )
}