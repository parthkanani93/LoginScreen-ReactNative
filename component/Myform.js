import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Myform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder="Enter Email" />
        <TextInput secureTextEntry={true} style={styles.textinput} placeholder="Enter Password" />
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textinput: {
    fontWeight: '300',
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 5,
    height: 50,
    fontSize : 20
  },
  buttoncontainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 12,
    borderRadius: 30


  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'

  }
});

export default Myform;
