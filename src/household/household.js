import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity,Button} from 'react-native';

const members = [
  {
    name: 'Reachel Smith',
    status: 'Owner',
    image: require('../assets/Photo.jpg'),
  },
  {
    name: 'Smith',
    status: 'Own',
    image: require('../assets/Photo.jpg'),
  },
  {
    name: 'Reach',
    status: 'ner',
    image: require('../assets/Photo.jpg'),
  },
  {
    name: ' Smi',
    status: 'Owe',
    image: require('../assets/Photo.jpg'),
  },
  {
    name: 'mith',
    status: 'ner',
    image: require('../assets/Photo.jpg'),
  },
  {
    name: 'achel ',
    status: 'wne',
    image: require('../assets/Photo.jpg'),
  },
];
const Invited = [
  {
    image: require('../assets/Photo.jpg'),
    name: 'hutt',
    email: 'hutt@yahoo.com',
    image2: require('../assets/Photo.jpg'),
    image3: require('../assets/Photo.jpg'),
  },
  {
    image: require('../assets/Photo.jpg'),
    name: 'chinpukali',
    email: 'chinpukali@yahoo.com',
    image2: require('../assets/Photo.jpg'),
    image3: require('../assets/Photo.jpg'),
  },
  {
    image: require('../assets/Photo.jpg'),
    name: 'teddybear',
    email: 'teaddybear@yahoo.com',
    image2: require('../assets/Photo.jpg'),
    image3: require('../assets/Photo.jpg'),
  },
];
export function Household({navigation}) {
  const RenderMember = ({name, status, image}) => {
    return (
      <View style={{marginHorizontal: 5, marginTop: 10}}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={image}
        />
        <Text style={{width: 80}}>{name}</Text>
        <Text>{status}</Text>
      </View>
    );
  };
  const renderInvite = ({image, name, email, image2, image3}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 10}}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={image}
        />
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
        </View>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={image2}
        />
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={image3}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerFirst}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('myother');
        }} activeOpacity={0.9}>
          
        <Image
          style={{width: 78, height: 78, borderRadius: 8}}
          source={require('../assets/Photo.jpg')}
        />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '700', marginLeft: 20}} onPress={()=>{
          navigation.goBack();
        }}>
          Awesome Smiths
        </Text>
      </View>
      <View >
        <Text style={{color: '#C2C9D1', fontSize: 20}}>Members </Text>
        <FlatList
          data={members}
          horizontal
          renderItem={({item, index}) => {
            console.log(item, 'item');
            return (
              <RenderMember
                name={item.name}
                status={item.status}
                image={item.image}
              />
            );
          }}
        />

        {/* <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
          <View style={{marginLeft: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../assets/Photo.jpg')}
            />
            <Text>Rachel Smith</Text>
            <Text>Owner</Text>
          </View>

          <View style={{marginLeft: 10}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../assets/Photo.jpg')}
            />
            <Text>Nate Smith</Text>
            <Text>Joined Mar 12,2020</Text>
          </View>
        </View> */}
      </View>
      <View style={{marginTop:20}}>
        <Text style={{color: '#C2C9D1', fontSize: 20}}>Invited +</Text>
        <FlatList
          data={Invited}
          renderItem={({item, index}) => {
            return renderInvite({...item});
          }}
        />

        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Image style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../assets/Photo.jpg')}/>
        <View>
          <Text>Hello</Text>
          <Text>Hello@gmail.com</Text>
        </View>
        <Image style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../assets/Photo.jpg')}/>
        <Image style={{width: 50, height: 50, borderRadius: 25}}
              source={require('../assets/Photo.jpg')}/>
      </View> */}
      </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
  },
  containerFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 45,
  },
});
