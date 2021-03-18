import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Tab3() {
    return (
        <View style={styles.Container}> 
            <Text>Tab3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"violet",
        justifyContent:'center',
        alignItems:'center'
    
    }
})
