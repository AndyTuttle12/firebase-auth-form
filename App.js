import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCDMEg4L4qri_pfC5mQerkwmGSATLkTEvU",
      authDomain: "one-time-password-auth.firebaseapp.com",
      databaseURL: "https://one-time-password-auth.firebaseio.com",
      projectId: "one-time-password-auth",
      storageBucket: "one-time-password-auth.appspot.com",
      messagingSenderId: "504640557490"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
