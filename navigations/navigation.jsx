import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro_screen from '../screens/Intro_screen';
import Wellcome_screen from '../screens/Wellcome_screen';
import bottom_tabs from './bottom_tabs';
import Chat_screen from '../screens/Chat_screen';
import { color } from '../assets/colors/color';

const Stack = createStackNavigator();

const navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro_screen"
        component={Intro_screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="welcome"
        component={Wellcome_screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat_screen}
        options={{
          headerStyle: {
            backgroundColor: color.primary,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={bottom_tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default navigation;
