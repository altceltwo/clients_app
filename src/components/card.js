
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, Image, Button, Pressable, Modal} from 'react-native'
import {globalStyle} from '../styles';
import  ModalConsumo  from './modalConsumo';

function Card({device}) {
    const {number, company, service, user_email, created_at, id} = device;
    const [modalConsumo, setModalConsumo] = useState(false)
    return ( 
        <View style={styles.card}>
            <View style={[styles.headerDevice,{flex:1}]}>
                <Image style={styles.mifiLetra} source={require('../../assets/img/MIFI-2.png')}/>
                <Text style={styles.dateActivation}>Activado desde:</Text> 
                <Text style={[styles.infoCenter, styles.text]}>{created_at}</Text> 
            </View>
            <View style={[styles.content,{flex:4}]}>
                <View style={[styles.infoPlan,{flex:2}]}>
                    <View style={[styles.textFirst]}>
                        <Text style={[styles.text, styles.infoCenter]}>Paquete:</Text>
                        <Text style={styles.text}>MIFI 20 GB TN USO INTERNO</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Número</Text>
                        <Text style={[styles.text]}>{number}</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Estado de servicio: Activo</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Correo electrónico:</Text>
                        <Text style={styles.text}>{user_email}</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <Image style={styles.mifiDevice} source={require('../../assets/img/MIFI.png')}/>
                </View>
            </View>
            <Pressable style={styles.btnConsumos} onPress={()=> setModalConsumo(true)}><Text style={styles.text}>Consumos de datos</Text></Pressable>
            <Modal transparent={true}  visible={modalConsumo}>
                <ModalConsumo setModalConsumo={setModalConsumo}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical: 40,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#4923F5',
        marginTop: 70
    },
    headerDevice:{
        width: '100%',
        borderColor: '#fff',
        alignItems: 'center'
    },
    content:{
        width: '100%',
        borderColor: '#fff',
        height: 800
    },
    text:{
        ...globalStyle.text
    },
    mifiLetra:{
        height: 100,
        width:200,
        marginLeft: 80,
        marginTop: 10
    },
    dateActivation:{
        marginTop:-30,
        fontSize: 15,
        color:'black'
    },
    btnConsumos:{
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        borderColor: '#F5232D',
        padding: 3,

    },
    infoPlan:{
        alignItems: 'center'
    },
    mifiDevice:{
        height: 140,
        width: 110,
        marginHorizontal: 80,
        marginTop: -20
    },
    mtText:{
        marginTop:10,
        alignItems:'center'
    },
    infoCenter:{
        fontWeight: 'bold',
        alignItems:'center'
    },
    textFirst:{
        marginTop: 40,
        alignItems:'center'
    },
    
    
})
export default Card;