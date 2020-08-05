import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Detail() {
    return (
      <View>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="From"></TextInput>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="to"></TextInput>
      </View>
    );
  }