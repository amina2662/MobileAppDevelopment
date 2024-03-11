/*
const express = require('express');
const app = express();
const port = 3000;

// Load data from database or file system here
const books = [
  { id: '1', title: 'Book 1', author: 'Author 1' },
  { id: '2', title: 'Book 2', author: 'Author 2' },
  { id: '3', title: 'Book 3', author: 'Author 3' },
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
*/




















/*import React, { Component, useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  List,
  ListItem,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'*/
/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

// import * as firebaseObj from 'firebase';
// import {firebaseConfig} from './config';

// if (!firebaseObj.apps.length){
// 	firebaseObj.initializeApp(firebaseConfig);
// }

/*import firestore from '@react-native-firebase/firestore';


import auth from '@react-native-firebase/auth';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '534887302385-g8dgpoippt1rqigt20d33vm7c204f2ev.apps.googleusercontent.com',
});


// Phone Signed In
function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}


// OnAuthChange 
function SignIn() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}



class App extends Component{
  constructor(props){
    super(props);

    this.state={
      fname:'',
      lname:'',
      email:'',
      phone:'',
      test:'',
      data:'',
    }
    
  }

  componentDidMount(){

}

  
  onChangeTextFName = (text) =>{
    this.setState({fname:text});
  }

  onChangeTextLName = (text) =>{
    this.setState({lname:text});
  }

  onChangeTextEmail = (text) =>{
    this.setState({email:text});
  }

  // onChangeTextPhone = (text) =>{
  //   this.setState({phone:text});
  // }


  onPressButtonGuestUser = () =>{

  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }
    console.error(error);
  });

  }

  onPressButtoncreateUserWithEmailAndPassword = () =>{

  auth()
  .createUserWithEmailAndPassword('akhzar4@gmail.com', '123456')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

}

onPressButtoncreateUserWithAlreadyCreatedUsers = () =>{

  auth().signInWithEmailAndPassword('akhzar4@gmail.com', '123456')
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('Signed In User is = ',user.uid);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}


onPressSignOut = () =>{

  auth().signOut().then(() => {
    Alert.alert('Signed Out Successfully');
  }).catch((error) => {
    // An error happened.
  });  

}


onGoogleButtonPress = async() => {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

  onPressButton = () =>{

  var count = ''+this.state.data.length;

  if(this.state.fname.length>0){
    if(this.state.lname.length>0){
      if(this.state.email.length>0){

  firestore()
  .collection('comsatsusers')
  .doc(count)
  .set({
    fname: this.state.fname,
    lname: this.state.lname,
    email: this.state.email,
    key: count
  })
  .then(() => {
    console.log('User added!');
  });

  this.callfunctiontopopulateFlatList();

}else{
        Alert.alert('Email Cannot be empty');
      }
    }else{
      Alert.alert('Last Name Cannot be empty');
    }
  }else{
    Alert.alert('First Name Cannot be empty');
  }
}

  callfunctiontopopulateFlatList = () =>{
  
  var newArray = [];

  firestore()
  .collection('comsatsusers')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    
    querySnapshot.forEach(documentSnapshot => {
      newArray.push(documentSnapshot.data());
    });

  }).then(testing=>{
    console.log('New Array Push is =', newArray);
    this.setState({data:newArray});
  });


    // this.setState({data:[]});


  }

  render(){
    return(
      <View>
      
      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextFName}
        placeholder = "First Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextLName}
        placeholder = "Last Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

    <TextInput
        style={styles.input}
        onChangeText={this.onChangeTextEmail}
        placeholder = "Email"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />

      <TouchableOpacity
          style = {{backgroundColor:'green'}}
          onPress = {this.onPressButton}>
        <Text> Submit </Text>
      </TouchableOpacity>

      <TouchableOpacity
          style = {{backgroundColor:'yellow'}}
          onPress = {this.onPressButtoncreateUserWithEmailAndPassword}>
        <Text> Sign In and Create User Name and Password </Text>
      </TouchableOpacity>

      <TouchableOpacity
          style = {{backgroundColor:'white'}}
          onPress = {this.onPressButtoncreateUserWithAlreadyCreatedUsers}>
        <Text> Sign In with Already Created Users </Text>
      </TouchableOpacity>

      <TouchableOpacity
          style = {{backgroundColor:'green'}}
          onPress = {this.onPressSignOut}>
        <Text> Sign Out </Text>
      </TouchableOpacity>

      <Button
      title="Google Sign-In"
      onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />


    <TouchableOpacity
          style = {{backgroundColor:'white'}}
          onPress = {this.onPressButtonGuestUser}>
        <Text> Guest User </Text>
    </TouchableOpacity>



      <SignIn />




      {/* <PhoneSignIn /> }*/


/*
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View>
            <Text> {item.fname} </Text>
            <Text> {item.lname} </Text>
            <Text> {item.email} </Text>
          </View>
        )}
      />

      </View>
    );
  };
}*/
/*
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});*/

export default App;