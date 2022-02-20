import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContex';
import { styles } from '../theme/appTheme';

export const AlbunsScreen = () => {

  const { authState, logout } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>AlbumScreen</Text>
      {
        authState.isLoggedIn && (
          <Button 
            title="logout"
            onPress={ logout }
          />
        )
      }
    </View>
  )
}
