import React, {useState}from 'react';
import { StyleSheet, View,Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    width: "100%",
    padding: 24,
  },
  input: {
    height: 48,
    marginBottom:24,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 8,
    lineHeight: 24,
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    alignSelf: "center"
  },
  button: {
    backgroundColor: "#E31676",
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center"
  },
  buttonTitle: {
    fontSize:20,
    color: "#fff",
  }
  
});


const LoginScreen = (props) => {

  const [email,setEmail] =useState("Email Address")
  const [password,setPassword] =useState("Password")

  return (
    <View style={styles.container}>
      <Text　style={styles.title}>
        ログイン
      </Text>
      <TextInput multiline style={styles.input} value={email} onChange={e => setEmail(e.target.value)}/>
      <TextInput multiline style={styles.input} value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      <TouchableHighlight　style={styles.button} underlayColor="#C70F66" onPress={()=>props.navigation.navigate("MemoList")}>
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>
    </View>
  );
}

export default LoginScreen