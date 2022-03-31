import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { Title, Appbar } from 'react-native-paper'
import Button from '../components/Button'
import { theme } from '../styles/theming'

export default function ContactUs({navigation}) {
  return(
    <View style={{flex: 1}}>
      <View>
        <Appbar.Header style={{backgroundColor: theme.colors.backdrop}}>
          <Appbar.BackAction onPress={ () => {navigation.goBack() }} />
          <Appbar.Content title="Nous contacter" />
        </Appbar.Header>
      </View>
    <View style={theme.colors.background}>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <View>
          <Text style={theme.paragraph}>
            Convivio, c'est une team à votre service <Text style={{fontWeight: 'bold'}}>du lundi au samedi, de 9h00 à 18h00</Text>
          </Text>
          <Text style={theme.paragraph}>Pour nous contacter, il suffit de nous envoyer un billet doux via cette application. Mais cela est également possible via :
          </Text>
        </View>
        <View>
          <Title style={theme.legend_2}>Par mail</Title>
          <Button title='hello@convivio.fr' onPress={ () => Linking.openURL('mailto:convivioevent@gmail.com') }/>
        </View>
        <View>
          <Title style={theme.legend_2}>Par téléphone</Title>
          <Button title='03.22.22.22.22' onPress={ () => Linking.openURL('tel: 03.22.22.22.22') } />
        </View>
        <View>
          <Text style={{fontSize: 15}}>
            Suivez également toute l'actu de l'agence et ses projets en consultant notre site Internet:</Text>
          <Button
            title="www.convivio.fr"
            color={ theme.colors.pureWhite }
            textColor={ theme.colors.orange }
            onPress={ () => Linking.openURL('https://www.convivio.fr') } >
              www.convivio.fr
          </Button>
        </View>
      </View>
    </View>
    <Image style={{
          width: '100%',
          height: '30%',
          top: -30,
        }}
        source={require('../assets/img/team_dessin_grey.png')}/>
  </View>
  )
}