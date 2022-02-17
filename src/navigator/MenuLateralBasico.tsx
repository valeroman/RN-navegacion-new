import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front' 
        // drawerStyle: {
        //   backgroundColor: '#C6CBEF',
        //   width: 240
        // }
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}