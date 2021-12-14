import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'
import { Title } from 'react-native-paper'
import  Btn from '../components/Button'
import { theme } from '../styles/theming'

export default function Chat() {
  return(
    <View>
      <View style={{
        paddingHorizontal:20,
      }}>
        <View style={ {
          paddingTop:5
        }}>
          <Title style={{
            textAlign:'center',
          }} >
            Nous contacter
          </Title>
          <Text style={ {
            paddingTop: 10
          }}>
            Convivio, c'est une team à votre service <Text style={{ fontWeight: 'bold' }}>du lundi au samedi, de 9h00 à 18h00</Text>
          </Text>
          <Text style={ {
            paddingTop: 10
          }}>Pour nous contacter, il suffit de nous envoyer un billet doux via cette application. Mais cela est également possible via :
          </Text>
        </View>
        <View style={ {
          paddingTop:20
        }}>
          <Title style={{ paddingBottom:10 }}>Par mail</Title>
          <Btn title='convivioevent@gmail.com' onPress={ () => Linking.openURL('mailto:convivioevent@gmail.com') } />
        </View>
        <View style={ {
          paddingTop:20
        }}>
          <Title style={{ paddingBottom:10 }}>Par téléphone</Title>
          <Btn title='03.22.22.22.22' onPress={ () => Linking.openURL('tel:0322222222') } />
        </View>
        <View style={ {
          paddingTop:40
        }}>
          <Text style={{ paddingBottom:10 }}>
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
          top: 10,
        }}
        source={require('../assets/img/team_dessin_grey.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
