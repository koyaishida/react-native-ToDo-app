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
    console.log(params)
    firebase.firestore()
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.user.uid}/memos`).add({
      title: "test444",    
      content: "Lovelace",
      date: 1815
    })

    .then((docRef)=> {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error)=>{
      console.error("Error adding document: ", error);
    });
  }

  return (
    <View style={styles.container}>
      <MemoList onPress={()=>{props.navigation.navigate("MemoDetail")}}/>
      <CircleButton name={"plus"} onPress={handleAdd}/>
    </View>
  );
}

export default MemoListScreen