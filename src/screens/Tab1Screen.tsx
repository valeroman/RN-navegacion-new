import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
          <Icon name='airplane-outline' size={80} color={ colores.primary } />
          <Icon name='boat-outline' size={80} color={ colores.primary } />
          <Icon name='bicycle-outline' size={80} color={ colores.primary } />
          <Icon name='cash-outline' size={80} color={ colores.primary } />
          <Icon name='desktop-outline' size={80} color={ colores.primary } />
          <Icon name='finger-print-outline' size={80} color={ colores.primary } />
          <Icon name='person-circle-outline' size={80} color={ colores.primary } />
          <Icon name='barbell-outline' size={80} color={ colores.primary } />
          <Icon name='cog-outline' size={80} color={ colores.primary } />
          <Icon name='heart-outline' size={80} color={ colores.primary } />
          <Icon name='paw-outline' size={80} color={ colores.primary } />
          <Icon name='planet-outline' size={80} color={ colores.primary } />
        </Text>
    </View>
  )
}
