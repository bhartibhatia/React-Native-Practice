import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab1Screen3() {
    return (
        <View style={styles.Container}> 
            <Text>Tab1Screen3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"lightblue",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
