import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, onPress, ImageBackground, Button, Image, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";

/*import { useQuery } from '@apollo/client';
import { CONTINENT_QUERY_COUNTRY } from './GraphQL';*/

import { gql } from "@apollo/client";

export default function MainScreen() {

    const route = useRoute();
    const CODE = route.params.code;

    const query = gql`
      query($CODE: Int!) {
        countries(id: $CODE) {
          name
          native
        }
      }
    `;

    const variable = { CODE };
    console.log(variable);

    const data = { query };
    console.log(data);
      
    }