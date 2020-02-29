import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  appBar: {
  position: "absolute",
  height: 78,
  top: 0,
  left: 0,
  right: 0,
  paddingTop: 30,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#265366",
  shadowColor: "#000",
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.5,
  shadowRadius: 3,
  zIndex: 1,
  },
  appBarTitle: {
    color: "#fff",
    fontSize: 18,
  },
})

const AppBar = () =>{
  return (
    <View style={styles.appBar}>
      <View>
        <Text style={styles.appBarTitle}>MEMOT</Text>
      </View>
    </View>
  )
}

export default AppBar ;