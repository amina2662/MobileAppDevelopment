import React, { useEffect, useState } from 'react';
import {firebase} from './Config'
import { View, Text, TouchableOpacity,StyleSheet, } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MainMenu from './MainMenu'
import {doc, setDoc,getDoc,collection,onSnapshot,getString, DocumentSnapshot} from 'firebase/firestore'

const BookDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //const cid = route.params.cid;
  const id = route.params.id;
  //console.log(cid)

  const db = firebase.firestore().collection('Books');

  const [bookdetails, setBookDetails] =useState([]);

  /*useEffect(() =>{
    db.doc(id).get().onSnapshot(doc => {
       console.log("I am not testing");
       console.log(doc.data());
     });
    }, [])*/

  useEffect( () =>{
    db
    .doc(id)
    .get()
    .then(documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);
  
      if (documentSnapshot.exists) {
       // console.log('User data: ', documentSnapshot.data());
       setBookDetails(documentSnapshot.data());

      }
    });
  }, [])

  //setBookDetails(bookdetails) = documentSnapshot.data();
  /*if (!bookdetails) {
    return <View><Text>Loading...</Text></View>;
  }*/

  return (
    <View style={styles.container}>
     
     <View style = {{flex: 0.2, backgroundColor: 'darkblue', marginTop:30}}>
        <Text style={{fontSize:25, color:'white', textAlign:'left', marginTop:10}}>
        <Ionicons  onPress = {() => navigation.navigate("MainMenu")} name="arrow-back-circle-outline" size={50} color="white" />
        </Text>
        <Text style={styles.title}> {bookdetails.title}</Text>
        <Text style={styles.author}> Author: {bookdetails.author}</Text>
      </View>

        <View style={styles.bookInfo}>
          <Text style={styles.ccl}> {'\t\t\t\t\t\t\t\t\t\t'} CHARACTERS {'\n'} {bookdetails.characters}</Text>
          <Text style={styles.ccl}> {'\t\t\t\t\t\t\t\t\t\t'}  PUBLICATION {'\n\t\t\t\t'} {bookdetails.currentEdition}</Text>
          <Text style={styles.ccl}>  LANGUAGE: {'\t'} {bookdetails.language}</Text>
          <Text style={styles.ccl}> ORIGINAL TITLE: {'\t'} {bookdetails.originalTitle}</Text>
          <Text style={styles.ccl}> PAGES: {'\t'} {bookdetails.pages}</Text>
          <Text style={styles.ccl}> {'\t\t\t\t\t\t\t\t\t\t'} SUMMARY {'\n'} {bookdetails.summary}</Text>
        </View>

      </View>
  );
  
  
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  bookInfo: {
    flex: 0.8,
    borderRadius:20,
    backgroundColor: 'royalblue',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
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
  ccl: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});
