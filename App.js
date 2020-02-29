import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from "./src/elements/copytext"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFDF6"
  },
  appBar: {
    position: "absolute",
    height: 78,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#265366",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 1,

  },
  appBarTitle: {
    color: "#fff",
    fontSize: 18,
  },
  memoList: {
    width: "100%",
    flex: 1,
    paddingTop: 78,
  },
  memoListItem: {
    padding: 16,
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
  memoAdd:{
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor:"#E31676",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 1,
  },
  memoAddButton: {
    fontSize: 24,
    textAlign: "center",
    lineHeight: 48,
    color: "#fff"
  }
});


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appBar}>
        <View>
          <Text style={styles.appBarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>タイトルタイトルタイトル</Text>
          <Text style={styles.memoDate}>日付1111</Text>
        </View>
      </View>
      
      <View　style={styles.memoAdd}>
        <Text　style={styles.memoAddButton}>＋</Text>
      </View>

    </View>
  );
}


