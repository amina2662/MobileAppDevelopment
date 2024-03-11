import {firebase} from './Config'
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { useRoute ,useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import BookMarkDetail from './BookMarkDetail';
import MainMenu from './MainMenu';


const BookMark = () => {
  const navigation = useNavigation();
  //const route = useRoute();
  //const id = route.params.id;
  //const name = route.params.name;
  //console.log(name)
  //const collection = id;
  //console.log(collection)

  const db = firebase.firestore().collection('favorites');

  const [books, setBooks] =useState([]);

  useEffect(async () =>{
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
  }, [])
  /*useEffect(() => {
    const getBooks = async () => {
    const booksSnapshot = await db.collection('Books').get();
    const books = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBooks(books);
    };

    getBooks();
  }, []);*/

  return(
    <View style={{ flex:1, backgroundColor: 'darkblue'}}>
        <View style = {{flex: 0.2, backgroundColor: 'darkblue', marginTop:30}}>
        <Text style={{fontSize:25, color:'white', textAlign:'left', marginTop:10}}>
        <Ionicons onPress = {() => navigation.navigate("MainMenu")} name="arrow-back-circle" size={50} color="white" />
        <Text style={{fontSize:25, color:'white', justifyContent:'right', textAlign:'right', marginTop:10}}>
          {'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}
        <Ionicons name="settings" size={50} color="white" />
        </Text>
        </Text>
        <Text style={{marginTop:10, fontWeight: 'bold', fontSize: 40, fontWeight: 'bold', color: 'white'}}> FAVORITES </Text>
        </View>

        <View style = {{flex: 0.8}}>
        <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.bookCard} 
          onPress={() => {
            navigation.navigate('BookMarkDetail', {id: item.id, cid: item.cid},);
          }}>
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
        </View>
    </View>
  )

}

export default BookMark

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