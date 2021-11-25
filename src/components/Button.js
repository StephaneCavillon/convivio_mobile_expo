import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../styles/theming'

export default function GeneralButton(props){
  const { title, onPress } = props;
  const color = props.color ?? theme.colors.orange
  const width = props.width ?? '80%'

  return(
    <View style={{alignItems:'center'}}>
      <Button
          mode='contained'
          style={styles.button, {width: width}}
          color={color}
          labelStyle={{color: theme.colors.pureWhite}}
          onPress={onPress}
        >
          {title}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: theme.colors.pureWhite,
  },
  button: {
    borderRadius: 5,
    margin: 2,
    justifyContent:'center'
  },
  home: {
    top: 350,
  }
})



