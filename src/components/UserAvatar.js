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
      size={90}
      label={firstname + lastname}
      backgroundColor={theme.colors.backdrop} />
  )
}