import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleImage}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../assets/Photo.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 20,
        }}
        onPress={() => {
            navigation.navigate('myownhouse')
        }}>
        Sign In
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10f',
    alignItems: 'center',
    paddingTop: 50,
  },
  circleImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
