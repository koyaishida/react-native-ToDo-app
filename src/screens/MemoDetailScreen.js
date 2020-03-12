import React ,{useState}from 'react';
import { StyleSheet, View,Text } from 'react-native';
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%"
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313C",
    justifyContent: "center",
    padding: 10,
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  headerDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: "#fff",
    flex: 1,
  },
  editButton: {
    top: 76,
    backgroundColor: "#fff",
  }
  
})

const dateToString = (date)=>{
  const str = date.toDate().toISOString();
  return str.split("T")[0]
}

const MemoDetailScreen = (props) => {
  const {memo} = props.navigation.state.params
  return (
    <View style={styles.container}>

      <View style={styles.memoHeader}>
        <Text style={styles.headerTitle}>{memo.title}</Text>
        <Text  style={styles.headerDate}>{dateToString(memo.date)}</Text>
      </View>

      <View style={styles.memoContent}>
        <Text>{memo.content}</Text>
      </View>
      
      <CircleButton style={styles.editButton} color={"white"} name={"edit"} onPress={()=>{props.navigation.navigate("MemoEdit",{memo:memo})}}/>
    </View>
  );
}

export default MemoDetailScreen