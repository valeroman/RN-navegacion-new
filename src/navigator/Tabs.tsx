import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon  from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'cash-outline'
            break;

            case 'StackNavigator':
              iconName = 'cog-outline'
            break;

          }

          return <Icon name={ iconName } size={20} color={ colores.secondary } />
          // return <Text style={{ color }}>{ iconName }</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: ({ color }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'person-circle-outline'
            break;

            case 'TopTabNavigator':
              iconName = 'cash-outline'
            break;

            case 'StackNavigator':
              iconName = 'cog-outline'
            break;

          }
          return <Icon name={ iconName } size={20} color={ colores.primary } />
          // return <Text style={{ color }}>{ iconName }</Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
    
  );
}

{/* <Tab.Navigator         
  sceneContainerStyle={{ 
    backgroundColor:'white'         
  }}        
   screenOptions={ ({route}) => ({                 
    tabBarActiveTintColor: colores.primary,                 
    tabBarStyle:{                     
      borderTopColor:colores.primary,                     
      borderTopWidth: 0,                     
      elevation:0                 
    },                 
    tabBarLabelStyle:{                     
      fontSize:15                 
    },                 
    tabBarIcon: ({color, focused, size}) =>{                     
      let iconName: string = '';                                         
      switch( route.name ){                         
        case 'Tab1Screen':                             
          iconName = 'T1'                        
        break;                         
        case 'Tab2Screen':                             
          iconName = 'T2'                         
        break;                         
        case 'StackNavigator':                            
          iconName = 'St'                         
        break;                     
      }                     
      return <Text style={{ color }} >{iconName}</Text>                 
    }             
  })           
} */}
