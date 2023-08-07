import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ProductDetailsScreen,
  SearchScreen,
  LoginScreen,
  RegisterScreen,
  CartScreen,
  CheckoutScreen,
} from '../Screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={BottomTabs} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HSHome" component={HomeScreen} />
      <Stack.Screen name="HSDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CSCart" component={CartScreen} />
      <Stack.Screen name="CSCheckout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SSSearch" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export {AppStack, AuthStack, HomeStack, SearchStack, CartStack};
