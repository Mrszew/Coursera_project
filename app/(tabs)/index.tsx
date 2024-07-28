import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput,Pressable,View,Image } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn,onLogin] = useState(false);

  const handleLogin =() =>{
    onLogin(true);
  };
  const handleLogout = () => {
    onLogin(false);
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Little Lemon</Text>
        <Image source={require("../../assets/images/favicon.png")}/>
      </View>  
      <Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
      {loggedIn ? (
        <Pressable style={styles.pressButton} onPress={handleLogout}>
          <Text style={styles.buttonText}> You are logged in!</Text>
        </Pressable>
      ) : (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
            clearButtonMode='always'
          />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={onChangePassword}
          placeholder={'password'}
          keyboardType={'default'}
          secureTextEntry={true}
          clearButtonMode='always'
        />  
          <View style={styles.pressButtonContainer}>
            <Pressable style={styles.pressButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </View>  
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"grey",
    
    
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    backgroundColor:"yellow",
    marginBottom:20,
    
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',

  },
  welcomeText:{
    color:"black",
    fontSize:40,
    textAlign:'center'
  },
  pressButton:{
    backgroundColor: '#FFAD8F', // Peach color
    borderRadius: 25, // Rounded corners
    paddingVertical: 20,
    paddingHorizontal: 20,
    width:200,
    
  },
  buttonText:{
    color: 'black', 
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
    
  },
  pressButtonContainer:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    marginTop:20,
    
  },
  headerContainer:{
    marginBottom:20
    
    
    
    
    
    
  },
});

