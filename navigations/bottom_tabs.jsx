import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FAB } from 'react-native-paper';
import Home_screen from '../screens/Home_screen';
import Setting_screen from '../screens/Setting_screen';
import { color } from '../assets/colors/color';

const bottom_tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
            height: 60,
            borderTopWidth: 0,
            elevation: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home_screen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={30} color={focused ? color.primary : '#888'} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting_screen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="settings" size={30} color={focused ? color.primary : '#888'} />
            ),
          }}
        />
      </Tab.Navigator>
      <FAB
        style={[styles.fab]}
        color='#fff'
        icon="plus"
        onPress={() => console.log('FAB pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    left: '39%',
    borderRadius: '50%',
    bottom: 50,
    color: '#ffff',
    backgroundColor: color.primary,
    transform: [{ translateY: 28 }],
    boxShadow: '0 6 0 2 white',
  },
  
});

export default bottom_tabs;