import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export const flex = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{...styles.firstrow,position:'absolute',top:10,left:25}}>

      </View>
      <View style={{...styles.secondrow,position:'absolute',top:140,left:50}}>

      </View>
      <View style={{...styles.thirdrow,position:'absolute',top:280,left:85}}>

      </View>
      <View>
        <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{height:100,width:100,borderRadius:50,alignSelf:'center'}}/>
      </View>
      {/* <View style={styles.firstrowConatiner}>
        <View style={styles.firstrow}></View>
        <View style={styles.secondrow}></View>
        <View style={styles.thirdrow}></View>
      </View> */}
{/* 

      <View style={styles.firstrowConatiner}>
        <View style={styles.firstrow}></View>
        <View style={styles.secondrow}></View>
        <View style={styles.thirdrow}></View>
      </View>


      <View style={styles.firstrowConatiner}>
        <View style={styles.firstrow}></View>
        <View style={styles.secondrow}></View>
        <View style={styles.thirdrow}></View>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'lightblue',
    flex:1,
    margin:10,
    // justifyContent:'space-between'
  },
  firstrowConatiner:{
    flexDirection:'row',
 
  justifyContent:'space-between'
},
  firstrow:{
height:100,
width:100,
backgroundColor:'black'
  },
  secondrow:{
    height:100,
width:100,
backgroundColor:'pink'
  },
  thirdrow:{
    height:100,
width:100,
backgroundColor:'grey'
  }
});
