import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../styles/theming';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Tiles(props) {
  const { icon, onPress } = props;
  return(
    <View>
      <Button
        style={{
          backgroundColor: theme.colors.surface,
          width: '30%',
          height: '30%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        mode="contained"
        onPress={onPress}>
          <Text>
            <MaterialCommunityIcons
              name={icon}
              color={theme.colors.orange}
              size={30}
            />
          </Text>
      </Button>
    </View>
  )
}