
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, Image, Button, Pressable} from 'react-native'

function Card() {
    return ( 
        <View style={styles.card}>
            <View style={[styles.headerDevice,{flex:1}]}>
                <Image style={styles.mifiLetra} source={require('../../assets/img/MIFI-2.png')}/>
                <Text style={styles.dateActivation}>Activado desde: 29/06/2022</Text> 
            </View>
            <View style={[styles.content,{flex:4}]}>
                <View style={[styles.infoPlan,{flex:2}]}>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Paquete:</Text>
                        <Text style={styles.text}>MIFI 20 GB TN USO INTERNO</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Núm. Chip: 3339064244</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Estado de servicio: Activo</Text>
                    </View>
                    <View style={styles.mtText}> 
                        <Text style={[styles.text, styles.infoCenter]}>SIM asignado:</Text>
                        <Text style={styles.text}>8952140061756550841F</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={[styles.text, styles.infoCenter]}>Correo electrónico:</Text>
                        <Text style={styles.text}>charlesrootsman97@gmail.com</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <Image style={styles.mifiDevice} source={require('../../assets/img/MIFI.png')}/>
                </View>
            </View>
            <Pressable style={styles.btnConsumos}><Text style={styles.text}>Consumos de datos</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'85%',
        marginVertical: 40,
        marginHorizontal: 30,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#4923F5',
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
        color:'black'
    },
    mifiLetra:{
        height: 100,
        width:200,
        marginLeft: 80,
        marginTop: 10
    },
    dateActivation:{
        marginTop:-30,
        fontSize: 18,
        color:'black'
    },
    btnConsumos:{
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        borderColor: '#F5232D'
    },
    infoPlan:{
        alignItems: 'center'
    },
    mifiDevice:{
        height: 140,
        width: 110,
        marginLeft: 110,
        marginTop: -20
    },
    mtText:{
        marginTop:10,
        alignItems:'center'
    },
    infoCenter:{
        fontWeight: 'bold',
        alignItems:'center'
    }
    
})
export default Card;