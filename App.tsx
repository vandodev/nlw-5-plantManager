import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function app (){
  return(
    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <View style={style.container}>
       <Text>nlw 5</Text>
    </View>
   
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})