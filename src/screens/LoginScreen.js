import React, {useState}from 'react';
import { StyleSheet, View,Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from "firebase"

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

  const [email,setEmail] =useState("k.157.2@gmail.com")
  const [password,setPassword] =useState("koya1572")

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user)=>{
        console.log("success")
        console.log(user)
        props.navigation.navigate("MemoList")
      })
      .catch((error)=>{
        console.log(error)
        console.log("error")
      })
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ログイン
      </Text>

      <TextInput style={styles.input} value={email} placeholder="Email" 
      onChangeText={text => setEmail(text)} autoCapitalize="none" autoCorrect={false}/>

      {/* onChangeではなくonChangeText */}
      <TextInput style={styles.input} value={password} placeholder="Password" onChangeText={text => setPassword(text)} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}/>

      <TouchableHighlight　style={styles.button} underlayColor="#C70F66"
        onPress={handleLogin}>
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>

    </View>
  );
}

export default LoginScreen