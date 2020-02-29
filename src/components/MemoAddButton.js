import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  memoAdd:{
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor:"#E31676",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 1,
  },
  memoAddButton: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 48,
    color: "#fff"
  }
})

const MemoAddButton = () =>{
  return (
    <View　style={styles.memoAdd}>
      <Text　style={styles.memoAddButton}>＋</Text>
    </View>
  )
}

export default MemoAddButton ;