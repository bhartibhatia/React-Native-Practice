//  import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyLogin from '../login/login'
import {Household} from '../household/household'
import 'react-native-gesture-handler';
import {Other} from '../other/other'
import {Tab1Screen1,Tab1Screen2,Tab1Screen3} from '../tab1';
import {Tab2Screen1,Tab2Screen2} from '../tab2'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AddTask} from '../addTask/addTask'



const Stack = createStackNavigator();
const Tab1 = createStackNavigator();
const MyBottomTab =createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator mode={"modal"} >
            <Stack.Screen name={"login"} component={MyLogin}  options={{ title: 'MyLogin' }}  />
            <Stack.Screen name={"myownhouse"} component={Household} options={{ title: 'MyHousehold'}}/>
            <Stack.Screen name={"myother"} component={Other} options={{ title: 'MyOther'}}/>
            <Stack.Screen name={"bottomTab"} component={BottomNav} options={{headerShown:false}}/>
            <Stack.Screen name={"addTask"} component={AddTask} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
 


function BottomNav(){
  return (
    <MyBottomTab.Navigator tabBarOptions={{
      style: {
        borderTopWidth:2,
        height: 50,
      
        alignItems: 'center',
        // paddingTop: vh(1)
      },
    }}>
      <MyBottomTab.Screen name={"tab1"} component={Tab1Screen} options={{tabBarLabel:({focused})=>{
        return(
        focused?<Text style={{fontSize:22,color:"black"}}>Tab1</Text>: <Text style={{fontSize:16,color:"gray"}}>Tab1</Text>
        )
      }}}  />
      <MyBottomTab.Screen name={"tab2"} component={Tab2Screen1} options={{tabBarLabel:({focused})=>{
        return(
          focused?<Text style={{fontSize:22,color:"black"}}>Tab2</Text>: <Text style={{fontSize:16,color:"gray"}}>Tab2</Text>
        )
      }}} />
    </MyBottomTab.Navigator>
  )
  
}


function Tab1Screen(){
  return(
    <Tab1.Navigator>
      <Tab1.Screen name={"tab1screen1"} component={Tab1Screen1} options={{headerShown:false}} />
    </Tab1.Navigator>
  )
}
  
