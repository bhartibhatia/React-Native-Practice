import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';


export function AddTask() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={{...styles.textDesign, color: 'grey'}}>Cancel</Text>
        <Text style={{...styles.textDesign, fontWeight: 'bold'}}>Add Task</Text>
        <Text style={{...styles.textDesign, color: '#62C7CB'}}>Save</Text>
      </View>
      <ScrollView>
      <View style={styles.secondContainer}>
        <TextInput
          style={{...styles.textInput, borderBottomWidth: 1}}
          placeholder={'Task Name'}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.textAssign}>Assign To </Text>
          <Image
            style={{height: 30, width: 30, borderRadius: 4, marginLeft: 6}}
            source={require('../assets/Photo.jpg')}
          />
          <Image
            style={{height: 30, width: 30, borderRadius: 4, marginLeft: 6}}
            source={require('../assets/Photo.jpg')}
          />
        </View>
        <TextInput style={styles.textInput} placeholder={'Schedule'} />
      </View>
      

      <View style={styles.secondContainer}>
        <TextInput
          style={{...styles.textInput, borderBottomWidth: 1 }}
          placeholder={'Recipe'}
        />
       <TextInput style={styles.textInput} placeholder={'Checklist'} />
      </View>


<View style={styles.thirdContainer}>
<TextInput style={styles.messageInput} placeholder={'Notes'} numberOfLines={3} />
</View>
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 14,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop:30
  },
  textDesign: {
    fontSize: 18,
  },
  secondContainer: {
    flexDirection: 'column',
    //  backgroundColor:'grey',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#C2C9D1',
    marginTop:24
  },
  textInput: {
    height: 52,
    // backgroundColor:'yellow',
    borderColor: '#C2C9D1',
    marginLeft: 24,
  },
  textAssign: {
    color: '#C2C9D1',
  },
  middleContainer: {
    height: 52,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginLeft: 24,
  },
  messageInput:{
      marginLeft:24,
      backgroundColor:'blue',
      
  },
  thirdContainer:{
      width:'100%',
      height:104,
      borderWidth: 1,
    borderColor: '#C2C9D1',
    marginTop:24,
    borderRadius:10,
    justifyContent:'flex-start'
  }
});
