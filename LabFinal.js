import {firebase} from './Config'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios"

import MainMenu from './MainMenu';

const database = firebase.database();

const LabFinal = () => {
  const navigation = useNavigation();

  const func = async () => {
    const response = await axios.get("https://labfinal-8bb22-default-rtdb.firebaseio.com/.json");
    console.log(response.data)
  }

  useEffect(() => {
    func();
  })


  return (
    <View>
         <Text style={{fontSize:25, color:'white', textAlign:'left', marginTop:50}}>
            <Ionicons onPress = {() => navigation.navigate("MainMenu")} name="arrow-back-circle" size={50} color="white" />
        </Text>
        <Text>{response.data}</Text>
    </View>
  );

}

export default LabFinal

/*const styles = StyleSheet.create({
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
})*/