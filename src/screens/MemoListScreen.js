import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  
});


const MemoListScreen = (props) => {
  return (
    <View style={styles.container}>
      <MemoList onPress={()=>{props.navigation.navigate("MemoDetail")}}/>
      <CircleButton name={"plus"} onPress={()=>{props.navigation.navigate("MemoEdit")}}/>
    </View>
  );
}

export default MemoListScreen