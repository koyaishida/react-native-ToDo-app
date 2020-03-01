import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const MemoList = () =>{
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>タイトルタイトルタイトル</Text>
        <Text style={styles.memoDate}>日付1111</Text>
      </View>
    </View>
  )
}

export default MemoList ;