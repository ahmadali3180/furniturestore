import React from 'react';
import {AuthStack, AppStack} from './Stacks';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {true ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
