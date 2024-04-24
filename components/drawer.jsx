// screens/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailsScreen from '../pages/client';
import HomeScreen from '../pages/client';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Details' component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
