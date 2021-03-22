import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const flex = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ContainerOne}>
        <View style={styles.oneContainer}></View>
        <View style={styles.secondContainer}></View>
        <View style={styles.thirdConatiner}></View>
        <View style={styles.fourthConatiner}></View>
        <View style={styles.fifthConatiner}></View>
        <View style={styles.sixthConatiner}></View>
      </View>
      <View style={styles.Containertwo}>
        <View style={styles.sevenConatiner}></View>
        <View style={styles.eightConatiner}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  oneContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  secondContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  thirdConatiner: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
  },
  fourthConatiner: {
    backgroundColor: 'yellow',
    height: 100,
    width: 100,
  },
  fifthConatiner: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
  },
  sixthConatiner: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  sevenConatiner: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  eightConatiner: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
  },

  ContainerOne: {
    
    flexDirection: 'column',
   
  },
  Containertwo:{
    flexDirection: 'column',

    
  }
});
