import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from "./src/components/AppBar"
import MemoListScreen from "./src/screens/MemoListScreen"
import MemoDetailScreen from "./src/screens/MemoDetailScreen"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6",
    paddingTop: 78,
  },
  
});

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
         <AppBar />
         {/* { <MemoListScreen /> } */}
         <MemoDetailScreen />
      </View>
    );
  }
}


