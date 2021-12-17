import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/HomeScreen'
import Dashboard from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import ChatScreen from '../screens/ChatScreen'
import ContactScreen from '../screens/ContactScreen'
import CalendarScreen from '../screens/CalendarScreen'
import OptionsScreen from '../screens/OptionsScreen'
import EventScreen from '../screens/EventScreen'

const Stack = createStackNavigator()

function LoginStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Dashboard" component={ Dashboard } />
      <Stack.Screen name="Calendar" component={ CalendarScreen } />

      <Stack.Screen name="Event" component={ EventScreen } getId={({ params }) => params.eventId}/>
      <Stack.Screen name="Contact" component={ ContactScreen } />
      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  )
}

function ChatStackNavigator() {
  return (
    <Stack.Navigator
          screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Chat" component={ ChatScreen } />
      <Stack.Screen name="Contact" component={ ContactScreen } />

      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  )
}

function OptionStackNavigator() {
  return (
    <Stack.Navigator
          screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Options" component={ OptionsScreen } />

      <Stack.Screen name="Login" component={ LoginScreen } />
    </Stack.Navigator>
  )
}

export { LoginStackNavigator, MainStackNavigator, ChatStackNavigator, OptionStackNavigator }