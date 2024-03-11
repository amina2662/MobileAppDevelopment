import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground} from "react-native";
import {firebase} from './Config';

import RegistrationScreen from './RegistrationScreen';
import DashBoard from './DashBoard';
import MainMenu from './MainMenu';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        navigation.navigate('MainMenu')
    }catch(error){
        alert(error.message)
    }
}

  return (
    <View  style = {{flex: 1, marginBottom:10}}>
      
      <View style = {{flex:0.9, justifyContent: 'center', alignItems: 'center'}}>
        <Image style = {{width:100, height:100, backgroundColor:'white', borderRadius:30}}
        source={require('./assets/pictures/logo.png')} />
        <Text style = {{fontSize: 30, fontWeight: 'bold', }}> Hello Book Lovers! </Text>
        <Text style = {{fontSize: 20, textAlign:'center', color: 'darkblue',}}> Welcome to the world of books! Please enter your login details to access your account. </Text>
      
        <Text style = {{fontSize:15, alignItems: 'flex-start', color: 'darkblue'}}> {'\n\n\n'} Email: </Text>
        <TextInput style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
        placeholder="abc@gmail.com"
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        />

        <Text style = {{fontSize:15, alignItems: 'flex-end', color: 'darkblue'}}>Password: </Text>
        <TextInput style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry = {true}
        />

        <TouchableOpacity
        style={{width:200, height:40, backgroundColor:'darkblue', borderRadius:10, alignItems:'center', justifyContent:'center'}}
        onPress={() => loginUser(email, password)}
        >
        <Text style = {{fontSize:15, color: 'white'}}> Log In </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:200, height:40, backgroundColor:'white;ue', alignItems:'center', justifyContent:'center', justifyContent:'flex-end'}}
        onPress={()=>navigation.navigate('RegistrationScreen')}
        >
        <Text style = {{fontSize:15, color: 'darkblue'}}> Don't have an account? Sign Up </Text>
        </TouchableOpacity>

      </View>  
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
