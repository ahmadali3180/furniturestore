/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartStack, HomeStack, SearchStack} from './Stacks';
import {ProfileScreen} from '../Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/constants';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absoulte',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={focused ? 28 : 24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={focused ? 28 : 24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={focused ? 28 : 24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={focused ? 28 : 24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
