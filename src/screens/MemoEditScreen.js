import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
  
});


const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput multiline style={styles.memoEditInput} value="test"/>
      <CircleButton name={"check"}/>
    </View>
  );
}

export default MemoListScreen