import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import MemoList from "../components/MemoList"
import MemoAddButton from "../elements/MemoAddButton"

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
  
});


const MemoDetailScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.memoHeader}>
        <Text style={styles.headerTitle}>header title</Text>
        <Text  style={styles.headerDate}>header date</Text>
      </View>

      <View style={styles.memoContent}>
        <Text>content</Text>
      </View>
      
      <MemoAddButton style={styles.editButton} color={"white"}/>
    </View>
  );
}

export default MemoDetailScreen