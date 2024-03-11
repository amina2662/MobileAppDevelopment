import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity} from "react-native";
import {firebase} from './Config';

import DashBoard from './MainMenu';

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const registerUser = async(email, password, firstname, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'https://bookstoreapp-f0242.firebaseapp.com',
        }).then(() => {
                alert('Verification message sent')
            }).catch((error) => {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('Users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName, lastName, email,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
            navigation.navigate("MainMenu")
        })
        .catch((error) => {                                     
            alert(error.message)
        })
    }   

    return(
        <View style={{flex:1, marginBottom:10}}>

        <View style = {{flex:0.9, justifyContent: 'center', alignItems: 'center'}}>
            <Image style = {{width:100, height:100, backgroundColor:'white', borderRadius:30}}
            source={require('./assets/pictures/logo.png')} />

            <Text style = {{fontSize:15, alignItems: 'flex-start', color: 'darkblue'}}> {'\n\n\n'} First Name: </Text>
                <TextInput
                style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
                placeholder="First Name"
                onChangeText={(firstName) => setFirstName(firstName)}
                />

            <Text style = {{fontSize:15, alignItems: 'flex-start', color: 'darkblue'}}> {'\n'} Last Name: </Text>
                <TextInput
                style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
                placeholder="Last Name"
                onChangeText={(lastName) => setLastName(lastName)}
                />
            
            <Text style = {{fontSize:15, alignItems: 'flex-start', color: 'darkblue'}}> {'\n'} Email: </Text>
                <TextInput
                style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                keyboardType="email-address"
                />

            <Text style = {{fontSize:15, alignItems: 'flex-start', color: 'darkblue'}}> {'\n'} Password: </Text>
                <TextInput
                style={{width: 200, height:40, borderWidth: 2, borderColor: '#00008B', borderRadius: 5, padding: 10, marginVertical: 10,}}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                secureTextEntry={true}
                />
            
            <TouchableOpacity
                style={{width:200, height:40, backgroundColor:'darkblue', borderRadius:10, alignItems:'center', justifyContent:'center'}}
                onPress = {() => registerUser(email, password, firstName, lastName)}>
                <Text style={{fontSize:15, color: 'white'}}> Register </Text>
            </TouchableOpacity>
        
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
