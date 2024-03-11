import {firebase} from './Config'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, TextInput, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import MainBookDetail from './MainBookDetail';
import DashBoard from './DashBoard'
import BookMark from './BookMark'

const db = firebase.firestore().collection('Books');

const BookList = () => {
  const navigation = useNavigation();
  //const route = useRoute();
  //const id = route.params.id;
  //const name = route.params.name;
  
  const [books, setBooks] =useState([]);
  const [bookCover, setBookCover] = useState([]);

  React.useEffect(() => {
    const data = [
      { id: '1', name: 'The Art of war', image: require('./assets/pictures/artofwar.jpg'), },
      { id: '2', name: 'The Mysterious Affair at Styles', image: require('./assets/pictures/mysteriousAffair.jpg'), },
      { id: '3', name: 'The Avengers', image: require('./assets/pictures/avengers.jpg'), },
      { id: '4', name: 'Pride and Prejudice', image: require('./assets/pictures/pride-prejudice.jpg'), },
      { id: '5', name: 'Sleeping Beauty', image: require('./assets/pictures/sleepingBeauty.jpg'), },
      { id: '6', name: 'The Alchemist', image: require('./assets/pictures/alchemist.jpg'), },
      { id: '7', name: 'The Great Gatsby', image: require('./assets/pictures/gatsby.jpg'), },
      { id: '8', name: 'The Dark Tower', image: require('./assets/pictures/darkTower.jpg'), },
      { id: '9', name: 'The Rosie Project', image: require('./assets/pictures/rosieproject.jpg'), },
      { id: '10', name: 'Hamlet', image: require('./assets/pictures/hamlet.jpg'),  },
    ];
    setBookCover(data);
  }, []);

  useEffect(async () =>{
    db.onSnapshot(
      querySnapshot => {
        const books = []
        querySnapshot.forEach((doc) => {
          const {title, author} = doc.data();
          books.push({
            id: doc.id,
            title, author,
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
    <View style={{flex:1, backgroundColor: 'darkblue'}}>

      <View style={{flex:0.1, flexDirection:'row', marginTop:50, alignItems: 'center', justifyContent:'center'}}>
      
      <TextInput style={{width: 250, height:40, borderWidth: 2, borderColor: 'white', borderRadius: 5, padding: 10, marginVertical: 10,}}
        placeholder="search here"
        placeholderTextColor={'white'}
        //onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false} 
      />
        
      </View>

      <View style={{flex:0.7}}>
      <FlatList
      data={books}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.bookCard} 
          onPress={() => {
            navigation.navigate('MainBookDetail', { id: item.id });
          }}>
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>By {item.author}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
      </View>

      <View style={{flex:0.2, flexDirection: 'row', marginBottom:10}}>
      <TouchableOpacity
        style={{width:120, height:150, marginBottom:10, backgroundColor:'royalblue', alignItems:'center', justifyContent:'center'}}
        >
        <Text style = {{fontSize:15, color: 'white'}}>
        <FontAwesome name="home" size={50} color="white" /> 
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:120, height:150, backgroundColor:'royalblue',alignItems:'center', justifyContent:'center'}}
        onPress={() => navigation.navigate('DashBoard')}
        >
        <Text style = {{fontSize:15, color: 'white'}}> 
        <MaterialIcons name="dashboard" size={50} color="white" />
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:120, height:150, backgroundColor:'royalblue', alignItems:'center', justifyContent:'center'}}
        onPress={() => navigation.navigate('BookMark')}
        >
        <Text style = {{fontSize:15, color: 'white'}}> 
        <Fontisto name="favorite" size={50} color="white" /> 
        </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )

}

export default BookList

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
  coverImage: {
    width: 200,
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})