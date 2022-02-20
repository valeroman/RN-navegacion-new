import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10
          }}
          onPress={ () => navigation.toggleDrawer() }
        >
          <Icon name='menu-outline' size={35} color={ colores.primary } />
        </TouchableOpacity>
      )
    })

  },[])

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina1Screen</Text>
        <Button 
            title='Ir pagina 2'
            onPress={() => navigation.navigate('Pagina2Screen')}
        />

        {/* <Button 
          title='ir persona'
          onPress={() => navigation.navigate('PersonaScreen')}
        /> */}

        <Text style={{ 
          marginVertical: 20,
          fontSize: 20,
          // marginLeft: 5 
        }}>
          Navegar con argumentos
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor: '#5856D6'
            }}
            onPress={() => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Maxi'
            })}
          >
            <Icon name='body-outline' size={35} color={ colores.secondary } />
            <Text style={ styles.botonGrandeTexto }>Maxi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor: '#FF9427'
            }}
            onPress={() => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Carola'
            }) }
          >
            <Icon name='woman-outline' size={35} color={ colores.secondary } />
            <Text style={ styles.botonGrandeTexto }>Carola</Text>
          </TouchableOpacity>
        </View>



    </View>
  )
}
