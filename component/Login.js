/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import Myform from './Myform';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./images/lcologo.png')} />
          <Text style={styles.title}>A simple App</Text>

        </View>
        <View style={styles.form}>
          <Myform />

        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3335',

  },
  logocontainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    height: 100,
    width: 100
  },
  form :{
    flex : 2,
  },
  title : {
    color : '#fff',
    fontSize : 20
  }
});
