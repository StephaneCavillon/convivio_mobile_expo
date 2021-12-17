import { ThemeProvider } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { theme } from '../styles/theming';

export default function UserAvatar (props) {
  const {user} = props
  var firstname = user.firstname.substr(0, 1);
  var lastname = user.lastname.substr(0, 1);

  return(
    <Avatar.Text 
      size={100}
      style={{
        elevation: 4,
        shadowColor: theme.colors.shadow
      }}
      label={firstname + lastname}
      labelStyle={{
        fontWeight: "normal",
      }}
      backgroundColor={theme.colors.backdrop}
      color={theme.colors.pureWhite}
      />
  )
}