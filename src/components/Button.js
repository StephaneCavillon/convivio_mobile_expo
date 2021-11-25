import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../styles/theming'

export default function GeneralButton(props){
  const { title, onPress } = props;
  return(
    <View>
      <Button
          mode='contained'
          style={styles.button}
          color={theme.colors.orange}
          labelStyle={{color: theme.colors.pureWhite}}
          onPress={onPress}
        >
          {title}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.falseBlack,
    padding: 20,
  },
  label: {
    color: theme.colors.pureWhite,
  },
  button: {
    borderRadius: 5,
    margin: 58,
    height: 45,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    top: 350,
  }
})



