import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {firebase} from './Config';

import Data from './Data';
import Translation from './Translation';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Data" component={Data} options={{headerShown: false}}/>
        <Stack.Screen name="Translation" component={Translation} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}


