import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab1Screen1() {
    return (
        <View style={styles.Container}> 
            <Text>Tab1Screen1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"green",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
