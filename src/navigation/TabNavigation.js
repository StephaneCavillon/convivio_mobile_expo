import React from 'react';
import { theme } from '../styles/theming'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MainStackNavigator, ChatStackNavigator, OptionStackNavigator } from './StackNavigation'

const Tab = createMaterialBottomTabNavigator()

export function TabNavigation() {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={theme.colors.pureWhite}
      barStyle={{
        backgroundColor: theme.colors.backdrop,
        height: 60,
        }}
    >
      <Tab.Screen
        name="Messages"
        component={ChatStackNavigator}
        options={{
          tabBarLabel: 'Messages',
          tabBarBadge: 1, // à modifier selon les notifs entrantes
          tabBarBadgeStyle: { // stylisation du badge à revoir, n'est pas pris en compte **
            backgroundColor: theme.colors.orange
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Parameter"
        component={OptionStackNavigator}
        options={{
          tabBarLabel: 'Options',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}