import React, { useEffect, useState } from 'react'
import {Text,StyleSheet,View, Pressable, Modal, Button, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from './card';
import { TextInput } from 'react-native-gesture-handler';
import { getDataDB } from '../helpers/getDataDB';
import Carousel from 'react-native-snap-carousel';
import { globalStyle } from '../styles';


function Panel() {
    const [isVisible, setIsVisible] = useState(false)
    const {useGetDevice} = getDataDB()
    
    return ( 
        <View style={styles.container}>
            
            <View style={styles.body}>
            <View style={styles.addDevice}>
                    <Pressable style={styles.btnAddDevice} onPress={() => setIsVisible(true)}>
                        <Text style={{color:'black', alignItems:'center'}}>Agregar Dispositivo <Icon name='add-outline' size={25} color="blue"/></Text>
                    </Pressable>


                    <Modal animationType='slide' transparent={true} visible={isVisible}>
                        <View style={styles.modalAdd}>
                            <View style={styles.bodyModal}>
                                <View style={styles.formModal}>
                                    <Text style= {[styles.text, styles.textTitle]}>Nuevo Dispositivo</Text>
                                    <Text style= {[styles.text, styles.textNum]}>Número de SIM</Text>
                                    <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='number-pad'
                            maxLength={10} placeholder='Número' />
                                </View>
                                <View style={styles.btns}>
                                    <Button color="red"  title='Cancelar' onPress={() => setIsVisible(false)}></Button>
                                    <Button title='Agregar' onPress={() => setIsVisible(false)}></Button>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                {
                    useGetDevice.length === 0 ? <Text>Aún no cuenta con dispositivos</Text> :

                    <Carousel
                       itemWidth={300}
                       sliderWidth={400}
                       data={useGetDevice}
                       keyExtractor={(item) => item.id}
                       renderItem={({item}) => {return(
                        <Card device={item} item={item}></Card>
                       )}}
                       
                    />
                }    
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderColor: '#d5d9dc',
        borderWidth: 2,
        color: '#000',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 15,
        marginHorizontal: 10
    },
    textTitle:{
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 80,
        fontWeight: 'bold'
    },
    textNum:{
        marginLeft: 20,
        marginTop: 20
    },
    text:{
        color: 'black'
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    body:{
        flex: 1,
        width:'100%',
        marginVertical: 100,
        height: 400,
        alignContent: 'center'
    },
    addDevice:{
        marginHorizontal:35,
        alignItems:'flex-start',
        marginBottom: -50,
        marginTop: -90,
    },
    btnAddDevice:{
        padding: 5,
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#F5232D',
        marginTop: 10
    },
    modalAdd:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyModal:{
        borderRadius: 10,
        width: 300,
        height: 250,
        backgroundColor: 'white',
        // alignItems: 'center',
    },
    btns:{
        ...globalStyle.btnsModal
    }
})
export default Panel;