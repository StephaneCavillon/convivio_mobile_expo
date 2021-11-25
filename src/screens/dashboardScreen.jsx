import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Dashboard({navigation}) {

  return(
    <View>
      <StatusBar style="auto" />
      <Text>
        Dashboard screen
      </Text>
      <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Login')}>
        Loggin screen
      </Button>
    </View>
  )
}