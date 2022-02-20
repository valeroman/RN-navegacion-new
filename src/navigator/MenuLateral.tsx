import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';

import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const  MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno { ...props } />}
      screenOptions={{
        headerShown: false,
        drawerType: (width >= 768 ? 'permanent' : 'front'),
        // drawerStyle: {
        //   backgroundColor: '#C6CBEF',
        //   width: 240
        // }
      }}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de Menu */}
      <View style={ styles.menuContainer }>
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Icon name='compass-outline' size={20} color={ colores.primary } />
          <Text style={ styles.menuTexto }> Navegacion</Text>
        </TouchableOpacity>
      
        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Icon name='settings-outline' size={20} color={ colores.primary } />
          <Text style={ styles.menuTexto }> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}