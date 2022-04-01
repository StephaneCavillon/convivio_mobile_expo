import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Tiles(props) {
  const { icon, onPress } = props;
  const { title } = props;
  return(
    <View style={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      flex: 1,
      marginHorizontal: 10,
    }}>
      <Button
        style={{
          backgroundColor: theme.colors.surface,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
          flex: 9,
        }}
        mode="contained"
        onPress={onPress}>
          <Text>
            <MaterialCommunityIcons
              name={icon}
              color={theme.colors.orange}
              size={25}
            />
          </Text>
      </Button>
      <Text style={{flex: 5, marginTop: 8}}>{title}</Text>
    </View>
  )
}