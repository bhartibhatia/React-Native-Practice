import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab2Screen1() {
    return (
        <View style={styles.Container}> 
            <Text>Tab2Screen1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"pink",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
