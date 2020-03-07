import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import AppBar from "./src/components/AppBar"
import MemoListScreen from "./src/screens/MemoListScreen"
import MemoDetailScreen from "./src/screens/MemoDetailScreen"
import MemoEditScreen from "./src/screens/MemoEditScreen"
import MemoAddScreen from "./src/screens/MemoAddScreen"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"
import firebase from "firebase"
import ENV from "./env.json"

require("firebase/firestore")

const firebaseConfig = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DATABASE_URL,
  projectId:          ENV.FIREBASE_PROJECT_ID,
  storageBucket:      ENV.FIREBASE,
  messagingSenderId:  ENV.FIREBASE_STORAGE_BUCKET,
  appId:              ENV.FIREBASE_MESSAGING_SENDER_ID,
  measurementId:      ENV.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
  Signup : {
    screen : SignupScreen
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
  MemoAdd : {
    screen : MemoAddScreen
  },
},{
  defaultNavigationOptions: {
    headerTitle: "Memot",
    headerStyle: {
      backgroundColor: '#265366'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: "#fff",
    },
  }
})

export default createAppContainer(App)



