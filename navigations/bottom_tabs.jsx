import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home_screen from '../screens/Home_screen';
import Setting_screen from '../screens/Setting_screen';
import {color} from '../assets/colors/color';
import Add_contact_screen from '../screens/Add_contact_screen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.customButton}
    onPress={onPress}>
    <Icon name="add" size={30} color={'white'} />
  </TouchableOpacity>
);

const Bottom_tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 70, backgroundColor: '#f5f5f5'},
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Z-Chat"
        component={Home_screen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={30} color={color} />
          ),
          headerStyle: {
            backgroundColor: color.primary,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Tab.Screen
        name="Add"
        component={Add_contact_screen}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton {...props}></CustomTabBarButton>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Setting_screen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -30,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    width: 60,
    height: 60,
    borderRadius: 35,
    boxShadow: '0 0 0 10px white',
  },
});

export default Bottom_tabs;
