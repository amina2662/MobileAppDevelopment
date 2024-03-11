import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { db } from './Config' 
import { ref, set } from "firebase/database";
import axios from "axios";

import Translation from './Translation'

export default function App() {

    const navigation = useNavigation();

    const [data, setData] = useState([]);

  const func = async () => {
    //const response = await 
    axios.get("https://labfinal-8bb22-default-rtdb.firebaseio.com/.json")
    .then((response) => {
        setData(response.data);
        console.log(response.data)
    });
    
    console.log('1')
    
  }

  useEffect(() => {
    func();
  }, [])

  return (
    <View style={{flex:1}}>
     
     <View style={{flex:0.25, alignItems:'center', justifyContent:'center'}}> 
        <TouchableOpacity
        style={{width:200, height:40,  borderRadius:10, alignItems:'center', justifyContent:'center'}}
        onPress={() => navigation.navigate('Translation')}>
            <Image
            style={{width:100, height:100, backgroundColor:'grey'}}
            source={require('./assets/icon.png')}
            />
        </TouchableOpacity>
        {data.map((item) => (
        <Text>{item.TranslationSimple}</Text>
      ))}
     
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
