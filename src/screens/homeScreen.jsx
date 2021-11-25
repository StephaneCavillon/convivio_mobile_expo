import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { theme } from '../styles/theming';


export default function Home() {
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/background-home.jpg')}
        style={styles.coverImage}
      >
        <View style={styles.darkness} />
      </ImageBackground>
      <Image
        source={require('../assets/img/ConvivioBlanc.png')}
        style={styles.logo}
        resizeMode='contain'
      >
      </Image>
      <Text style={{
        color: theme.colors.pureWhite,
        fontSize: 15,
        zIndex: 1, 
        position: 'absolute',
        top: 250,
        left: '44.5%',
        }}
      >
        Agence évènementielle
      </Text>
      <Text style={{
        color: theme.colors.pureWhite,
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        zIndex: 1, 
        position: 'absolute',
        padding: 60,
        top: 280
        }}
      >
        Organisons votre évènement ensemble
      </Text>
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
    zIndex: 1, 
    position: 'absolute',
    top: 150,
  },
})