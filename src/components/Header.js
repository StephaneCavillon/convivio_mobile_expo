import React from 'react'
import { Text, View, Image } from 'react-native';

import { theme } from '../styles/theming';

export default function Header() {
  return(
    <View>
      <Image 
        source={require('../assets/img/dashboard.jpg')}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '45%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
      </Image>
      <View style={{
        backgroundColor: theme.colors.backdrop, 
        height: '12%',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 15,
        top: -30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}
        >
        <Text style={{
          color: theme.colors.pureWhite,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
          Bonjour Justine
        </Text>
      </View>
    </View>
  )
}