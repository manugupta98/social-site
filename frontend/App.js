import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Details from './src/components/Details'
import Cabs_list from './src/components/cabs_list'

export default function App() {
  return (
    <View>
      <Details />
      <Cabs_list />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


