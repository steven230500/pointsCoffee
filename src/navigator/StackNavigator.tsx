import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailPage from '../screens/detail/DetailPage';
import HomePage from '../screens/home/HomePage';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F8F8F8'}
      }}>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Detail" component={DetailPage} />
    </Stack.Navigator>
  );
};
