import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import BookCategory from './BookCategory'
import MainMenu from './MainMenu'

const DashboardScreen = ({ navigation }) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const data = [
      { id: '1', name: 'Fiction', image: require('./assets/pictures/fiction.jpg'), description: 'Fiction books are a type of literature that tells a story that is not based on real events or people.'},
      { id: '2', name: 'Non-fiction', image: require('./assets/pictures/non-fiction.jpg'), description: 'Non-fiction books are a type of literature that is based on real events, people, and information.'},
      { id: '3', name: 'Fantasy', image: require('./assets/pictures/fantasy.jpg'), description: 'Fantasy books are a type of fiction that features imaginative and otherworldly elements, such as magic, mythical creatures, and fantastical settings.'},
      { id: '4', name: 'Literature', image: require('./assets/pictures/literature.jpg'), description: 'Literature books are a type of book that includes works of fiction and non-fiction that are considered to be of high artistic value.'},
      { id: '5', name: 'Comedy', image: require('./assets/pictures/comedy.jpg'), description: 'Comedy books are a type of literature that is meant to be funny and entertaining. Comedy books may be based on real events or people, or they may be entirely fictional.'},
      { id: '6', name: 'Comic', image: require('./assets/pictures/comic.png'), description: 'Comic books are a type of literature that tells a story using a combination of text and sequential art, usually in the form of panels or strips.'},
      { id: '7', name: 'Mystery', image: require('./assets/pictures/mystery.jpg'), description: 'Mystery books are a type of fiction that involves a puzzle or problem that needs to be solved.'},
      { id: '8', name: 'Fairy Tales', image: require('./assets/pictures/fairytales.jpg'), description: 'Fairy tales are a type of folklore that features magical and mythical creatures, such as dragons, giants, fairies, and more. '},
      { id: '9', name: 'Art and Design', image: require('./assets/pictures/art.jpg'), description: 'Art and design books are a type of literature that focuses on the visual arts and design disciplines, such as drawing, painting, graphic design, architecture, and more.'},
      { id: '10', name: 'Action', image: require('./assets/pictures/action.jpg'), description: 'Action books are a type of literature that features fast-paced, thrilling, and exciting storylines that often involve physical conflict or danger.' },
    ];
    setCategories(data);
  }, []);

  const renderCategory = ({ item }) => {
    return (
      
      <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('BookCategory', { id: item.id , name: item.name})}
      >
        <Image
          style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5,}}
          source={item.image}
        />
        <View style={{padding: 20,}}>
        <Text style={styles.categoryName}> {'\t'} {item.name} {'\n'}
        <Text style={styles.categoryDescription}> {item.description}</Text>
        </Text>
        </View>

      </TouchableOpacity>

    );
  };

  return (
    <View style={styles.container}>
      
      <View style = {{flex: 0.2, backgroundColor: 'darkblue', marginTop:30}}>
      <Text style={{fontSize:25, color:'white', textAlign:'left', marginTop:10}}>
        <Ionicons onPress = {() => navigation.navigate("MainMenu")} name="arrow-back-circle" size={50} color="white" />
        <Text style={{fontSize:25, color:'white', justifyContent:'right', textAlign:'right', marginTop:10}}>
          {'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}
        <Ionicons name="settings" size={50} color="white" />
        </Text>
        </Text>
        <Text style = {{fontSize:30, color:'white', alignItem:'center'}}> {'\n\t\t\t\t\t\t\t'} Book Categories</Text>
      </View>

      <View style = {{flex: 0.8, backgroundColor: 'royalblue', borderRadius:20}}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
      />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
  category: {
    flex: 1,
    margin: 10,
    backgroundColor: 'darkblue',
    shadowColor: 'darkblue',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
    borderRadius: 5,
  },
  categoryName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop:20,
    textAlign: 'center',
    alignSelf: 'flex-start'
  },
  categoryDescription: {
    fontSize: 15,
    color: 'white',
    marginBottom:10
  },
});

export default DashboardScreen;
