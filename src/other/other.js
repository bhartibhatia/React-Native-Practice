import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Other({navigation}) {
    return (
        <View style={{flex:1,backgroundColor:'grey',justifyContent:'center',alignItems:'center'}} >
            <Text onPress={()=>{
                navigation.navigate('login');
            }} style={{fontSize:20 }}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
