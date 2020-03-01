import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from "../components/MemoList"
import MemoAddButton from "../elements/MemoAddButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  
});


const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <MemoList />
      <MemoAddButton />
    </View>
  );
}

export default MemoListScreen