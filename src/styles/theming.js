import { CurrentRenderContext } from '@react-navigation/native'
import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    orange: '#F25835',
    falseBlack: '#222222',
    pureBlack: '#000000',
    beige: '#F2EDE4',
    pureWhite: '#FFFFFF',
    falseWhite: "#F3F4F6",

    text: '#222222',
    accent: '#F25835',
    surface: '#FFFFFF', // Couleur de background pour les éléments type cartes
    backdrop: '#222222', // Couleur de background pour modales
    background: '#F3F4F6',
    placeholder:'#FFFFFF',
    disabled: '#6E6E6E',
    shadow: '#6E6E6E',
  },

  roundness: 4, // Degré de rondeur des éléments type boutons

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

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  coverImage: {
    width: '100%',
    height: 850,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  titleTop: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },

  legend: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  }

  // Importer les fonts --> Montserrat + ses variantes regular, semiBold, bold
}