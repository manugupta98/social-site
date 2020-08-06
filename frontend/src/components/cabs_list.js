import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ListView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

export default function cabsList() {

  const list = [
    {
      from: "BPHC",
      to: "Airport",
      timeStart: new Date(732759814389),
      timeEnd: new Date(387623743842)
    },
    {
      from: "Airport",
      to: "BPHC",
      timeStart: new Date(732759814389),
      timeEnd: new Date(732759814389)
    },
    {
      from: "BPHC",
      to: "Railway",
      timeStart: new Date(732759814389),
      timeEnd: new Date(732759814389)
    },
  ]

  let renderItem = ({ item }) => (
    <ListItem
      title={item.from + " to " + item.to}
      subtitle={item.timeStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + "-" + item.timeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      rightTitle={item.timeStart.toLocaleDateString()}
      bottomDivider
      chevron
    />
  )

    return (
      <View>
        <FlatList
          data = {list}
          renderItem = {renderItem}
        />
      </View>
    );
  }