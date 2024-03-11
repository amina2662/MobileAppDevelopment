import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {firebase} from './Config';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import MainMenu from './MainMenu';
import MainBookDetail from './MainBookDetail'
import BookMark from './BookMark';
import BookMarkDetail from './BookMarkDetail';
import DashBoard from './DashBoard';
import BookCategory from './BookCategory';
import BookDetail from './BookDetail';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false}}/>
        <Stack.Screen name="MainBookDetail" component={MainBookDetail} options={{headerShown: false}}/>
        <Stack.Screen name="BookMark" component={BookMark} options={{headerShown: false}}/>
        <Stack.Screen name="BookMarkDetail" component={BookMarkDetail} options={{headerShown: false}}/>
        <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown: false}}/>
        <Stack.Screen name="BookCategory" component={BookCategory} options={{headerShown: false}}/>
        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown: false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
