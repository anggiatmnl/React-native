
import React, { Component } from 'react';
import {Text} from 'react-native';

export default class Judul extends Component{
  render() {
    return (
        <Text style={styles.container}>BIODATA</Text>
    );
  }
}

const styles ={
  container: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#0F0',
  },
};
