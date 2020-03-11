import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,FlatList } from 'react-native';

const styles = StyleSheet.create({
  memoList: {
    width: "100%",
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4
  },
  memoDate: {
    fontSize: 12,
    color: "#a2a2a2"
  },
})

const dateToString = (date)=>{
  const str = date.toDate().toISOString();
  return str.split("T")[0]
}



const  MemoList =(props)=> {
  
  const renderMemo =({item})=> {
    return(
      <TouchableHighlight style={styles.memoList} onPress={()=>{props.navigation.navigate("MemoDetail",{memo : item})}}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.title}</Text>
          <Text style={styles.memoDate}>{dateToString(item.date)}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  return (
    <View style={styles.memoList}>
      <FlatList data={props.memoList} renderItem={renderMemo.bind(this)}/>
    </View>
  )  
}


export default MemoList ;