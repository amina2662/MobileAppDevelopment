import { useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, ScrollView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { db } from './Config' 
import { ref, set } from "firebase/database";
import axios from "axios";


export default function App() {
    
  return (
    <View style={{flex:1}}>
        
        <View style={{flex: 0.1, backgroundColor:'royalblue', flexDirection:'row'}}>
          <View style={{flex: 0.3}}>
            <Text style={{fontSize:25, color:'white', justifyContent:'center',  textAlign:'left', marginTop:25}}>
            <Ionicons name="arrow-back" size={40} color="white" />
            </Text>
          </View>
          <View style={{flex: 0.4}}>
            <Text style={{fontSize:25, color:'white', justifyContent:'center',  textAlign:'center', marginTop:25}}>
                QURAN
            </Text>
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{fontSize:25, color:'white', justifyContent:'center', textAlign:'right', marginTop:25}}>
            <Ionicons name="settings" size={40} color="white" />
            </Text>
          </View>
        </View>

        <View style={{flex: 0.1, backgroundColor:'#000000', flexDirection:'row'}}>
          <View style={{flex: 0.1}}>
            <Text style={{fontSize:25, color:'white', justifyContent:'center',  textAlign:'left', marginTop:25}}>
            <MaterialCommunityIcons name="dots-vertical" size={40} color="white" />
            </Text>
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{fontSize:20, color:'white', justifyContent:'center',  textAlign:'center', marginTop:25}}>
                TAFSEER
            </Text>
          </View>
          <View style={{flex: 0.4}}>
            <Text style={{fontSize:20, color:'white', justifyContent:'center',  textAlign:'center', marginTop:25}}>
                TRANSLATION
            </Text>
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{fontSize:25, color:'white', justifyContent:'center', textAlign:'right', marginTop:25}}>
            21
            </Text>
          </View>
        </View>
     
        <View style={{flex:0.2, backgroundColor:'#000000'}}> 
            <Text style={{fontSize:25, color:'white', justifyContent:'center', textAlign:'center', marginTop:25}}>
            SURAH NAME
            </Text>
        </View>

        <View style={{flex:0.6, backgroundColor: '#000000'}}>
            <View style={{flex:0.1, backgroundColor: 'royalblue'}}>
                <Text style={{fontSize:20, color:'white', textAlign:'left', marginTop:10}}>
                     Surah NO.2 Ayat No.2 
                </Text>
            </View>

            <View style = {{flex:0.9, backgroundColor: 'black', borderRadius:10}}>
                <Text style = {{backgroundColor: '#36454F', fontSize:20 , color: 'white', margin: 5, padding:50, borderRadius: 10,}}>
                   
                </Text>

                <Text style = {{backgroundColor: '#36454F', fontSize:20 , color: 'white', margin: 5, padding:50, borderRadius: 10,}}>
                   
                </Text>

                <Text style = {{backgroundColor: '#36454F', fontSize:20 , color: 'white', margin: 5, padding:50, borderRadius: 10,}}>
                    {}
                </Text>

            </View> 

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
  bookInfo: {
    padding:20
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
