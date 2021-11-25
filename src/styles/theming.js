import { CurrentRenderContext } from '@react-navigation/native'
import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    orange: '#F25835',
    falseBlack: '#222222',
    pureBlack: '#000000',
    beige: '#F2EDE4',
    pureWhite: '#FFFFFF',
    falseWhite: "#F8F8F8",

    text: '#222222',
    accent: '#F25835',
    surface: '#FFFFFF', // Couleur de background pour les éléments type cartes
    backdrop: '#222222', // Couleur de background pour modales
    background: '#F8F8F8',
    placeholder:'#FFFFFF',
    disabled: '#6E6E6E',
  },

  roundness: 4, // Degré de rondeur des éléments type boutons

  // Importer les fonts --> Montserrat + ses variantes regular, semiBold, bold
}

export const styles = StyleSheet.create({ // Style background image (utilisé sur le home par ex)
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