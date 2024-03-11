import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

export default function App(props) {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'CONTINENTS' }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'COUNTRIES' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>

  );
}