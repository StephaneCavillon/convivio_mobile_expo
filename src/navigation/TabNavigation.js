import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../styles/theming'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ChatScreen from '../screens/ChatScreen';
import DashboardScreen from '../screens/DashboardScreen';
import OptionsScreen from '../screens/OptionsScreen';

const Tab = createMaterialBottomTabNavigator()

export default function TabNavigation() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        activeColor={theme.colors.pureWhite}
        barStyle={{ 
          backgroundColor: theme.colors.backdrop,
          height: 60,
          }}
      >
        <Tab.Screen 
          name="Messages"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="email" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Accueil"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Options"
          component={OptionsScreen}
          options={{
            tabBarLabel: 'Options',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}    