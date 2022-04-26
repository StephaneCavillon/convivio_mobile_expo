import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../styles/theming'

export default function buttonOutlined(props){
  const { title, onPress } = props;
  const width = props.width ?? '75%'

  return(
    <View style={{alignItems:'center'}}>
      <Button
          style={theme.button_outlined}
          mode='outlined'
          color={theme.colors.orange}
          width={width}
        >
          {title}
      </Button>
    </View>
  )
}