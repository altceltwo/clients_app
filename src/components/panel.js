import React, { useEffect, useState } from 'react'
import {Text,StyleSheet,View, Pressable, Modal, Button, Touchable, ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Card from './card';
import { TextInput } from 'react-native-gesture-handler';
import { getDataDB } from '../helpers/getDataDB';
import Carousel from 'react-native-snap-carousel';
import { globalStyle } from '../styles';


function Panel() {
    const [dn, setdn] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const {useGetDevice, addDevice, isLoading} = getDataDB()
    const [accessToken, setAccessToken ] = useState('');
    const keyProduction = 'ZjRWc3RzQXM4V1c0WFkyQVVtbVBSTE1pRDFGZldFQ0k6YkpHakpCcnBkWGZoajczUg==';
    console.log(accessToken)
    useEffect(() => {
        generateTokenAltan()
    }, [])

    const generateTokenAltan = async () => {
        try {
          const response = await fetch('https://altanredes-prod.apigee.net/v1/oauth/accesstoken?grant-type=client_credentials', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+keyProduction
            },
            body: JSON.stringify({
              Authorization: keyProduction
            })
          }).then((response) => response.json())
          .then((responseJson) => {
            // console.log(responseJson.accessToken, 'ACCESS TOKEN'); 
            setAccessToken(responseJson.accessToken)
            console.log(responseJson.accessToken,'TOKEN')
          })
        } catch (error) {
          console.log(error)
        }
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }
    
    return ( 
        <View style={styles.container}>
            
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
                        maxLength={10} placeholder='Número' value={dn} onChangeText={setdn}/>
                            </View>
                            <View style={styles.btns}>
                                <Button color="red"  title='Cancelar' onPress={() => setIsVisible(false)}></Button>
                                <Button title='Agregar' onPress={() => addDevice(dn)}></Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.body}>
                {
                    useGetDevice.length === 0 ? <Text>Aún no cuenta con dispositivos</Text> :
                    <View style={{flex: 1}}>
                        <Carousel
                        itemWidth={300}
                        sliderWidth={400}
                        data={useGetDevice}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {return(
                            <Card device={item} item={item} accessToken={accessToken}></Card>
                        )}}
                        
                        />
                    </View>

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
        flex: 8,
        width:'100%',
        marginVertical: 100,
        height: 400,
        alignContent: 'center',
        // backgroundColor:'red'
    },
    addDevice:{
        flex:1,
        marginHorizontal:35,
        alignItems:'flex-start',
        marginBottom: -50,
        marginTop: 10,
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