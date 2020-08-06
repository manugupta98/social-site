import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"


export default function Detail() {
    return (
      <View>
        <View>
          <Text>Destination</Text>
          <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="From">   
          </TextInput>
          <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="To">  
          </TextInput>
        </View>
        <View>
          <Text>Date</Text>
          <DatePicker />
          <Text>Time</Text>
          <Text>From</Text>
          <TimePicker />
          <Text>To</Text>
          <TimePicker />
        </View>
        <Button 
          title="Post it"
        />
        <Button 
          title="Find a suitable group"
        />
      </View>
    );
  }
