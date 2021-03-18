import React from 'react'
import {View,Text,TouchableOpacity,TextInput,Image,StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler'

export function AddTask(){
return(
<View style={styles.mainContainer}>
    <View style={styles.textContainer}>
        <Text style={{...styles.textDesign,color:'grey'}} >
            Cancel
        </Text>
        <Text style={{...styles.textDesign,fontWeight:'bold'}}>
            Add Task
        </Text>
        <Text style={{...styles.textDesign,color:'#62C7CB'}}>
Save
        </Text>
    </View>
<View style={styles.secondContainer}>
<TextInput style={{...styles.textInput,borderBottomWidth:1,marginLeft:24}} placeholder={'Task Name'}/>
<View style={styles.middleContainer}>
    <Text style={styles.textAssign}>Assign To </Text>
    <Image style={{height:30,width:30,borderRadius:4,marginLeft:6}} source={require('../assets/Photo.jpg')}/>
    <Image style={{height:30,width:30,borderRadius:4,marginLeft:6}} source={require('../assets/Photo.jpg')}/>
</View>
<TextInput style={styles.textInput} placeholder={'Schedule'}/>
</View>
</View>
)
}


const styles=StyleSheet.create({
    mainContainer:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:14
    },
    textContainer:{
        flexDirection:'row',
justifyContent:'space-between',
marginHorizontal:10,
marginVertical:30
 },
 textDesign:{
     fontSize:18
 },
 secondContainer:{
     flexDirection:'column',
    //  backgroundColor:'grey',
     borderRadius:25,
     overflow:'hidden',
     borderWidth:1
 },
 textInput:{
height:52,
// backgroundColor:'yellow',
marginLeft:14
},
textAssign:{
    
},
middleContainer:{
    height:52,
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center'
}
    
})
