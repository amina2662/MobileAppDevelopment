import {firebase} from './Config'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MainMenu from './MainMenu';


const Profile = () => {
  const navigation = useNavigation();
  //const route = useRoute();
  //const id = route.params.id;
  //const name = route.params.name;
  //console.log(name)
  //const collection = id;
  //console.log(collection)

  const db = firebase.firestore().collection('Users');

  const [userName, setuserName] =useState([]);

  /*useEffect(async () =>{
    db.onSnapshot(
      querySnapshot => {
        const books = []
        querySnapshot.forEach((doc) => {
          const {title, author, cid} = doc.data();
          books.push({
            id: doc.id,
            cid, title, author,
          })
        })
        setBooks(books)
      }
    )
  }, [])*/
    const userId = firebase.auth().currentUser.uid;
    console.log(userId)
    
    useEffect( () =>{
        db
        .doc(userId)
        .get()
        .then(documentSnapshot => {
          console.log('User exists: ', documentSnapshot.exists);
      
          if (documentSnapshot.exists) {
           // console.log('User data: ', documentSnapshot.data());
           setuserName(documentSnapshot.data());
    
          }
        });
      }, [])


  return(
    <View style={{ flex:1, backgroundColor: 'darkblue'}}>
        <Text style={{fontSize:25, color:'white', textAlign:'left', marginTop:50}}>
            <Ionicons onPress = {() => navigation.navigate("MainMenu")} name="arrow-back-circle" size={50} color="white" />
        </Text>
        <View style = {{flex:0.3, justifyContent:'center', alignItems:'center'}}>
            <Image style = {{width:100, height:100, backgroundColor:'white', borderRadius:30}}
                source={require('./assets/pictures/profile.png')} />
            <Text style={{marginTop:10, fontWeight: 'bold', fontSize: 40, textAlign: 'center', fontWeight: 'bold', color: 'white'}}> PROFILE </Text>
        </View>

        <View style = {{flex:0.7, backgroundColor: 'royalblue', borderRadius:10}}>
            
            <Text style = {{backgroundColor: '#00008B', fontSize:20 , color: 'white', margin: 10, padding:30, borderRadius: 10,}}>
                First Name {'\t\t\t\t\t\t\t\t\t\t\t\t\t'}
            <Text style ={{fontSize:20, color: 'white', textAlign:'left'}}> {userName.firstName} </Text>
            </Text>

            <Text style = {{backgroundColor: '#00008B', fontSize:20 , color: 'white', margin: 10, padding:30, borderRadius: 10,}}>
                Last Name {'\t\t\t\t\t\t\t\t\t\t\t\t\t'}
            <Text style ={{fontSize:20, color: 'white', textAlign:'left'}}> {userName.lastName} </Text>
            </Text>

            <Text style = {{backgroundColor: '#00008B', fontSize:20 , color: 'white', margin: 10, padding:30, borderRadius: 10,}}>
                e-mail {'\t\t\t\t\t'}
            <Text style ={{fontSize:15, color: 'white', textAlign:'left'}}> {userName.email} </Text>
            </Text>

            <View style = {{alignItems: 'center', marginTop:30}}>
            <TouchableOpacity
            style={{width:200, height:60, backgroundColor:'darkblue', borderRadius:10, alignItems:'center', justifyContent:'center'}}
            //onPress={() => loginUser(email, password)}
            >
            <Text style = {{fontSize:15, color: 'white'}}> Log Out </Text>
            </TouchableOpacity>
            </View>
            
        </View>

    </View>
  )

}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
    borderRadius: 5,
  },
  bookCover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bookInfo: {
    padding: 20,
  },
  bookTitle: {
    color: 'darkblue',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'drakblue',
    fontWeight: 'bold',
    marginBottom: 10,
  },
})