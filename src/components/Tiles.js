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
          width: '100%',
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: theme.colors.shadow,
          elevation: 3,
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