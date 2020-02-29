import React from "react";
import {StyleSheet,Text,View} from "react-native";
import { onAnchorsDidUpdate } from "expo/build/AR";

class BodyText extends React.Component{
  render(){
    return(
      <View style={styles.text}>
        <Text>hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#ddd",
  }
})
export default BodyText;