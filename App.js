import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './src/navigation/TabNavigation'
import Home from './src/screens/HomeScreen'

export default function App() {
  return (
    <View>
      <Home />
      <TabNavigation />
    </View>
  );
}