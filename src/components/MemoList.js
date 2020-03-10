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

const  MemoList =(props)=> {
  const renderMemo =({item})=> {
    return(
      <TouchableHighlight style={styles.memoList} onPress={props.onPress}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.title}</Text>
          <Text style={styles.memoDate}>テスト</Text>
        </View>
      </TouchableHighlight>
    )
  }
  return (
    <View style={styles.memoList}>
      <FlatList data={props.memoList} renderItem={renderMemo}/>
    </View>
  )  
}


export default MemoList ;