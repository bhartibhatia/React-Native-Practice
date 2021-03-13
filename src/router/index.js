//  import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyLogin from '../login/login'
import {Household} from '../household/household'
import 'react-native-gesture-handler';
import {Other} from '../other/other'



const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"login"} component={MyLogin}  options={{ title: 'MyLogin' }} />
            <Stack.Screen name={"myownhouse"} component={Household} options={{ title: 'MyHousehold'}}/>
            <Stack.Screen name={"myother"} component={Other} options={{ title: 'MyOther'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}