import React, { useEffect, useState } from 'react';
import {Text,StyleSheet,View, Image, Button, Pressable, ScrollView, FlatList, ImageBackground} from 'react-native';
import { getDataDB } from '../helpers/getDataDB';
import Icon from 'react-native-vector-icons/Ionicons';

const diccionarioServicio = {
  MIFI: require('../../assets/img/MIFI-2.png'),
  HBB: require('../../assets/img/HBB-2.png'),
  MOV: require('../../assets/img/MOV-2.png'),
}

const diccionarioLogo = {
  MIFI: require('../../assets/img/MIFI.png'),
  HBB: require('../../assets/img/Grupo22.png'),
  MOV: require('../../assets/img/Cel.png'),
}


export const Recargas = () => {

  const {useGetDevice} = getDataDB();

  return (
    <View style={styles.contenedor}>
      <ImageBackground source={require('../../assets/img/Circulos-01.png')} style={styles.image}>
        <View style={styles.headerDevice}>
          <Text style={styles.tituloNumero}>Mis números</Text>
        </View>
        <ScrollView>
          {
            useGetDevice.length === 0 ? <Text></Text> :

            <FlatList
              data={useGetDevice}
              keyExtractor={(item) => item.compay}
              renderItem={({item}) => {return(

                <View>
                  <View style={styles.card}>
                    <View style={styles.content}>
                      <View style={styles.infoPlan}>
                        <View style={styles.mtText}>
                          <Text style={[styles.text, styles.infoCenter]}>{item.number}</Text>
                          { item.service == 'MOV' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioMov} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoMov} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          { item.service == 'MIFI' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioMifi} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoMifi} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          { item.service == 'HBB' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioHbb} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoHbb} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          {/* <Image style={styles.servicios} source={diccionarioServicio[item.service]}/> */}
                        </View>
                        {/* <View>
                          <Image style={styles.mifiDevice} source={diccionarioLogo[item.service]}/>
                        </View> */}
                      </View>
                    </View>
                    <Pressable style={styles.btnRecargar}><Text style={styles.textoRecargar}><Icon name="cart-outline" size={30} />Recargar</Text></Pressable>
                  </View>
                </View>

              )}}
            />
          }
          </ScrollView>

      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  card:{
      alignItems:'center',
      justifyContent:'center',
      width: '70%',
      marginVertical: 40,
      marginHorizontal: 60,
      marginBottom: 1,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 15,
      borderColor: '#4923F5',
      backgroundColor: '#FFF'
  },

  headerDevice:{
      borderColor: '#fff',
      alignItems: 'center'
  },
  tituloNumero:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color:'black'
  },
  btnRecargar:{

      backgroundColor: '#001b54',
      paddingVertical: 5,
      paddingHorizontal: 70,
      borderRadius: 5,
      marginVertical: 10

  },
  textoRecargar:{
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  infoPlan:{
      alignItems: 'center'
  },
  mifiDevice:{
      height: 140,
      width: 150,
      marginVertical: 30,
      marginHorizontal: 50,
  },
  mtText:{
      marginTop:10,
      alignItems:'center'
  },
  infoCenter:{
      color: '#000',
      fontWeight: 'bold',
      alignItems:'center',
      fontSize: 25
  },
  servicioMifi:{
    width: 90,
    height: 35,
    marginVertical: 15,
    marginHorizontal: 1
  },
  servicioHbb:{
    width: 90,
    height: 35,
    marginVertical: 15,
    marginHorizontal: 15
  },
  servicioMov:{
    width: 90,
    height: 35,
    marginVertical: 15,
    marginHorizontal: 22
  },
  logoMov:{
    width: 100,
    height: 80,
  },
  logo:{
    width: 100,
    height: 80,
  },
  logoMifi:{
    width: 80,
    height: 100,
  },
  logoHbb:{
    width:100,
    height: 80,
    marginBottom: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

})

export default Recargas