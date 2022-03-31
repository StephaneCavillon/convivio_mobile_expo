import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Tiles(props) {
  const { icon, onPress } = props;
  return(
    <View style={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginHorizontal: 5,
    }}>
      <Button
        style={{
          backgroundColor: theme.colors.surface,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 1,
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
      <Text>Title</Text>
    </View>
  )
}