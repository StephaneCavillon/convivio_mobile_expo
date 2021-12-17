import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native';
import { theme } from '../styles/theming';

export default function Header(props) {
  const { user, userScreen } = props

  return(
    <View style={{
      flex: 2,
    }}>
      <Image
        source={require('../assets/img/dashboard.jpg')}
        resizeMode='cover'
        style={{
          width: '100%',
          flex: 4,
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