import React ,{useState}from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from "../elements/CircleButton"
import firebase from "firebase"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  memoEditTitle: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 24,
    backgroundColor: "lightgray"
  },
  memoEditBody: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 18,
    color: "black",
    backgroundColor: "#FFF"
  }
});

// onPress={()=>{props.navigation.navigate("MemoList")}
const MemoAddScreen = (props) => {
  const [title,setTitle] =useState("")
  const [content,setContent] =useState("")

  const handleSubmit = () => {
     const db = firebase.firestore();
     const {currentUser} = firebase.auth();
      db.collection(`users/${currentUser.uid}/memos`).add({
        title: title,    
        content: content,
        date: new Date()
      })

     .then((user)=> {
       console.log(user.id);
       props.navigation.navigate("MemoList")
     })
     .catch((error)=>{
       console.error("Error adding document: ", error);
     });
  }
  
  return (
    <View style={styles.container}>
      <TextInput multiline style={styles.memoEditTitle} value={title}
       onChangeText={text => setTitle(text)} placeholder="title"/>

      <TextInput multiline style={styles.memoEditBody} value={content}
       onChangeText={text => setContent(text)}/>
      <CircleButton name={"check"} onPress={handleSubmit} placeholder="body"/>
    </View>
  );
}

export default MemoAddScreen