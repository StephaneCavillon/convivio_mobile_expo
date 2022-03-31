import { CurrentRenderContext } from '@react-navigation/native'
import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    orange: '#F25835',
    paleOrange: '#F7D2CA',
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
    disabled: '#AFAFAF',
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

  title_2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#222222',
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
    marginTop: 20,
    marginBottom: 15,
  },

  legend_2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },

  label: {
    fontSize: 15,
    fontWeight: '400',
    paddingBottom: 5,
    marginTop: 20,
    color: '#222222'
  },

  input: {
    backgroundColor: '#ffffff',
    height: 50,
  },

  button: {
    marginTop: 30,
    marginBottom: 30,
    color: '#FFFFFF',
    backgroundColor: '#F25835',
    height: 45,
  },

  paragraph: {
    paddingTop: 10,
    fontSize: 15,
  },

  // OptionsScreen

  containerOptions: {
    backgroundColor: '#ffffff',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.4,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 5,
    borderRadius: 6,
    elevation: 1,
  }

  // Importer les fonts --> Montserrat + ses variantes regular, semiBold, bold
}