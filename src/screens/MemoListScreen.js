import React ,{useState,useEffect} from 'react';
import { StyleSheet, View, SafeAreaView,FlatList } from 'react-native';
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


class MemoListScreen extends React.Component {

  
  state = {
    memoList : []
  }

  componentWillMount(){
    const {currentUser} = firebase.auth();
    const db =firebase.firestore()
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((querySnapshot)=> {
        const memoList =[];
        querySnapshot.forEach((doc)=>{
          memoList.push({...doc.data(),key: doc.id})
        })
        
      this.setState({memoList})
      })

      .catch((error)=> {
      console.log(error)
      })
  }
  

  render(){
    return (
      <View style={styles.container}>
          <MemoList 
            memoList={this.state.memoList}
            navigation={this.props.navigation}/>
        <CircleButton name={"plus"} onPress={()=>{this.props.navigation.navigate("MemoAdd")}}/>
      </View>
    ); 
  } 
}

export default MemoListScreen