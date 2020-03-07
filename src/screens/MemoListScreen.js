import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"
import firebase from "firebase"

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

  const handleAdd = () =>{
    const {params} = props.navigation.state
    props.navigation.navigate("MemoAdd",{currentUser : params.currentUser})
  }


  return (
    <View style={styles.container}>
      <MemoList onPress={()=>{props.navigation.navigate("MemoDetail")}}/>
      <CircleButton name={"plus"} onPress={handleAdd}/>
    </View>
  );
}

export default MemoListScreen