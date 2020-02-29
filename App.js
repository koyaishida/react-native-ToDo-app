import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from "./src/components/MemoList"
import AppBar from "./src/components/AppBar"
import MemoAddButton from "./src/components/MemoAddButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6"
  },
  
});


export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <MemoAddButton />
    </View>
  );
}


