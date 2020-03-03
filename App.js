import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import AppBar from "./src/components/AppBar"
import MemoListScreen from "./src/screens/MemoListScreen"
import MemoDetailScreen from "./src/screens/MemoDetailScreen"
import MemoEditScreen from "./src/screens/MemoEditScreen"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6",
    paddingTop: 78,
  },
  
});

const  App = createStackNavigator({
  Login : {
    screen : LoginScreen
  },
  MemoList : {
    screen : MemoListScreen
  } ,
  MemoDetail : {
    screen : MemoDetailScreen
  } ,
  MemoEdit : {
    screen : MemoEditScreen
  },
})

export default createAppContainer(App)



