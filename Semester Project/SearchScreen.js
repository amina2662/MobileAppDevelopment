import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import {firebase} from './Config';

const db = firebase.firestore();

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async text => {
    setSearchText(text);
    const querySnapshot = await db.collection('Books')
      .where('title', '==', searchText)
      .get();
    const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setResults(results);
  };

  return (
    <View styles={{flex:1}}>
      <View styles={{flex:0.4, alignItems:'center', justifyContent:'center', marginBottom: 10}}>
      <Text styles={{marginTop:10, alignItems:'center'}}> SEARCH BY TITLE </Text>
      <TextInput
      style={{width:140,height:30,backgroundColor:'lightgrey', marginTop:20}}
        value={searchText}
        onChangeText={handleSearch}
      />
      </View>
      
      <View styles={{flex:0.6}}>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
      </View>
      
    </View>
  );
};

export default SearchScreen;
