import React from 'react'
import TabNavigation from './src/navigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigation'


export default function App() {

  return (
    // <View >
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}