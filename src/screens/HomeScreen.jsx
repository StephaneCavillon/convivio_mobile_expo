import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, StatusBar } from 'react-native';
import { theme } from '../styles/theming';
import Button from '../components/Button'


export default function Home({ navigation }) {
  return(
    <View>
      <StatusBar
        animated={true}
        hidden
      />
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
      <View style={{top: 350}}>
        <Button title="Let's go !" onPress={ () => navigation.navigate('Login') }/>
      </View>
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
