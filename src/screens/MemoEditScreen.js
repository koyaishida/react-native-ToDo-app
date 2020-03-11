import React ,{useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from "../elements/CircleButton"
import firebase from "firebase"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  memoEditInputTitle: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  
});

// onPress={()=>{props.navigation.navigate("MemoList")}
const MemoEditScreen = (props) => {

  const {memo} = props.navigation.state.params

  const [title,setTitle] = useState(memo.title) 
  const [content,setContent] = useState(memo.content) 
  const [key,setKey] = useState(memo.key) 

  const handlePress = ()=>{
    console.log("press")
    const {currentUser} = firebase.auth();
    const db = firebase.firestore()
    db.collection(`users/${currentUser.uid}/memos`).doc(key)
    .update({
      title : title,
      content :content,
    })
    .then(()=>{
      console.log("success")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
      <TextInput multiline style={styles.memoEditInputTitle} 
      value={title} onChangeText={text => setTitle(text)} />

      <TextInput multiline style={styles.memoEditInput} 
      value={content} onChangeText={text => setContent(text)} />
      <CircleButton name={"check"} onPress={handlePress}/>
    </View>
  );
}

export default MemoEditScreen