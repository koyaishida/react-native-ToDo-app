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

const MemoAddButton = (props) =>{
  const {style,color} = props 

  let bgColor = "#E31676";
  let textColor = "#fff";
  
  if (color === "white"){
    bgColor = "#fff";
    textColor = "#E31676";
  }
  return (
    <View　style={[styles.memoAdd,style,{backgroundColor: bgColor}]}>
      <Text　style={[styles.memoAddButton,{color: textColor}]}>＋</Text>
    </View>
  )
}

export default MemoAddButton ;