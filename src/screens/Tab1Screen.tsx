import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab1Screen effect')  
  },[])

  return (
    <View style={{
        ...styles.globalMargin,
        marginTop: top + 10
      }}
    >
        <Text style={ styles.title } >Iconos</Text>
        <Text>
          <TouchableIcon iconName='airplane-outline' />
          <TouchableIcon iconName='boat-outline' />
          <TouchableIcon iconName='bicycle-outline' />
          <TouchableIcon iconName='cash-outline' />
          <TouchableIcon iconName='desktop-outline' />
          <TouchableIcon iconName='finger-print-outline' />
          <TouchableIcon iconName='person-circle-outline' />
          <TouchableIcon iconName='barbell-outline' />
          <TouchableIcon iconName='cog-outline' />
          <TouchableIcon iconName='heart-outline' />
          <TouchableIcon iconName='paw-outline' />
          <TouchableIcon iconName='planet-outline' />
        </Text>
    </View>
  )
}
