import React from 'react'
import { View } from 'react-native'
import TabNavigation from './src/navigation/TabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigation'

import Home from './src/screens/HomeScreen'
import Dashboard from './src/screens/DashboardScreen'


export default function App() {
  return (
    <View >
      <Dashboard />
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}