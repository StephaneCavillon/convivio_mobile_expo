import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import ChatScreen from '../screens/ChatScreen'
import ContactScreen from '../screens/ContactScreen'
import OptionsScreen from '../screens/OptionsScreen'

const Stack = createStackNavigator()

function HomeStackNavigator() {
  return(
    <Stack.Navigator
      initialRouteName='Login'
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

function ChatStackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  )
}

function OptionStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Options" component={OptionsScreen} />
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, ChatStackNavigator, OptionStackNavigator }