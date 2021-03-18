import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab2Screen2() {
    return (
        <View style={styles.Container}> 
            <Text>Tab2Screen2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"yellow",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
