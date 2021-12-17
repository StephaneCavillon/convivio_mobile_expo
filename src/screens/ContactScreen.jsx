import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'
import { Title } from 'react-native-paper'
import  Btn from '../components/Button'
import { theme } from '../styles/theming'

export default function Chat() {
  return(
    <View style={theme.colors.background}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View>
          <Title style={theme.title}>
            Nous contacter
          </Title>
          <Text style={styles.paragraph}>
            Convivio, c'est une team à votre service <Text style={{fontWeight: 'bold'}}>du lundi au samedi, de 9h00 à 18h00</Text>
          </Text>
          <Text style={styles.paragraph}>Pour nous contacter, il suffit de nous envoyer un billet doux via cette application. Mais cela est également possible via :
          </Text>
        </View>
        <View style={ {
          paddingTop:20
        }}>
          <Title style={theme.legend}>Par mail</Title>
          <Btn title='convivioevent@gmail.com' onPress={ () => Linking.openURL('mailto:convivioevent@gmail.com') } />
        </View>
        <View style={ {
          paddingTop:20
        }}>
          <Title style={theme.legend}>Par téléphone</Title>
          <Btn title='03.22.22.22.22' onPress={ () => Linking.openURL('tel: 03.22.22.22.22') } />
        </View>
        <View>
          <Text style={styles.follow}>
            Suivez également toute l'actu de l'agence et ses projets en consultant notre site Internet:</Text>
          <Btn
            title="www.convivio.fr"
            color={ theme.colors.pureWhite }
            textColor={ theme.colors.orange }
            onPress={ () => Linking.openURL('https://www.convivio.fr') } >
              www.convivio.fr
          </Btn>
        </View>
      </View>
      <Image style={{
          width: '100%',
          height: '30%',
          top: 15,
        }}
        source={require('../assets/img/team_dessin_grey.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    paddingTop: 10,
    fontSize: 15,
  },

  follow: {
    fontSize: 15,
    paddingTop: 60,
    paddingBottom: 20,
  },

  legend: {
    fontSize: 18,
    paddingBottom: 10,
  }
})
