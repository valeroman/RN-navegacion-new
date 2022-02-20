import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbunsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
     style={{
        paddingTop: top,
     }}
     sceneContainerStyle={{
       backgroundColor: 'white'
     }}
     screenOptions={({ route }) => ({
      tabBarPressColor: colores.primary,
      tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: colores.primary
      },
      tabBarStyle: {
        shadowColor: 'transparent',
        elevation: 0
      },
      tabBarLabelStyle: { fontSize: 15 },
      tabBarIcon: ({ color }) => {

        let iconName: string = '';

        switch (route.name) {
          case 'Chat':
            iconName = 'finger-print-outline'
          break;

          case 'Contacts':
            iconName = 'heart-outline'
          break;

          case 'Albuns':
            iconName = 'planet-outline'
          break;

        }

        return <Icon name={ iconName } size={20} color={ colores.primary } />
      }
    })}
    //  screenOptions={{
    //    tabBarPressColor: colores.primary,
    //    tabBarShowIcon: false,
    //    tabBarIndicatorStyle: {
    //      backgroundColor: colores.primary
    //    },
    //    tabBarStyle: {
    //      shadowColor: 'transparent',
    //      elevation: 0
    //    }
    //  }}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albuns" component={ AlbunsScreen } />
    </Tab.Navigator>
  );
}