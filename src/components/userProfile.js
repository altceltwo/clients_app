import React from 'react'
import {Text,StyleSheet,View, Button} from 'react-native'

export const UserProfile = () => {
  return (
    <>
        <Text style={styles.text}>Perfil Usuario</Text>
    </>
  )
}

const styles = StyleSheet.create({
    text:{
        color:'black'
    }
})
