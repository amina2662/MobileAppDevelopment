import { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
//import Styles from './Styles';
//import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from './LoginScreen';

const Splash = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => navigation.navigate('LoginScreen')
      , 5000);
    });

    return (
        <View  style = {{flex: 1}}>
            
            <ImageBackground
                style={{flex:1}}
                source={require('./assets/pictures/SplashScreen.png')}/>      
            
        </View>
    )
}

export default Splash;