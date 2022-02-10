import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, Text, StatusBar, ActivityIndicator } from 'react-native';
import { theme } from '../styles/theming';
import Button from '../components/Button'


export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])
  return(
    <View>
      <StatusBar
        animated={true}
        hidden
      />
      <View style={theme.container}>
        <ImageBackground
          source={require('../assets/img/background-home.jpg')}
          style={theme.coverImage}
        >
          <View style={theme.darkness} />
        </ImageBackground>
        <Image
          source={require('../assets/img/ConvivioBlanc.png')}
          style={theme.logo}
          resizeMode='contain'
        >
        </Image>
        <Text style={{
          color: theme.colors.pureWhite,
          fontSize: 23,
          fontWeight: '600',
          textAlign: 'center',
          zIndex: 1,
          position: 'absolute',
          padding: 50,
          top: 330
          }}
        >
          Organisons votre évènement ensemble
        </Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'flex-end', margin: 60}}>
        <Text style={{
          color: theme.colors.pureWhite,
          fontSize: 15,
          zIndex: 1,
          position: 'absolute',
          top: 190,
          }}
        >
          Agence évènementielle
        </Text>
      </View>
      <View style={{top: 340}}>
      { loading ?
        <ActivityIndicator color={theme.colors.orange}/> :
        <Button
          title="Let's go !"
          onPress={() => navigation.navigate('Login')}
        />
      }
      </View>
    </View>
  )
}
