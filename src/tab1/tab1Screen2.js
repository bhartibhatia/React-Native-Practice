import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab1Screen2() {
    return (
        <View style={styles.Container}> 
            <Text>Tab1Screen2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
