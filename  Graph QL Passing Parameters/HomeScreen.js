import {StyleSheet, TouchableOpacity, Text, FlatList, View } from 'react-native'

import MainScreen from './MainScreen';

import { useQuery } from '@apollo/client';
import { CONTINENT_QUERY, LANGUAGE_QUERY, COUNTRY_QUERY } from './GraphQL';

export default function HomeScreen({navigation}) {

    const { data, loading } = useQuery(CONTINENT_QUERY);
    console.log(data);

    const ContinentItem = ({ continent }) => {
        const { name, code } = continent; 
        return (
          <View styles={{flex:1}}>

            <View style={{flex:0.9}}>
            <TouchableOpacity onPress = {() => navigation.navigate("MainScreen", {code: code})}
              style={{backgroundColor: 'royalblue', marginBottom: 0.5, height: 100, flex:1, flexDirection:'row'}}>
            <Text style={{ fontSize:20, alignItems: 'center'}}> Continent name: {name} {'\n'} 
            <Text style={{ fontSize:20, alignItems: 'center'}}> Continent code: {code} {'\n'}</Text>  
            </Text>
            </TouchableOpacity>
            </View>

          </View>
        );
      }; 
    
      if (loading) {
        return <Text>Fetching data...</Text> 
      }
    
      return (
        <View>
            <FlatList
        data={data.continents}
        renderItem={({ item }) => <ContinentItem continent={item} />}
        keyExtractor={(item, index) => index}
      />
        </View>
      );
      
    }

