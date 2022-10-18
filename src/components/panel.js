import React from 'react'
import {Text,StyleSheet,View, Button} from 'react-native'
import Swiper from 'react-native-swiper'
import Card from './card';

function Panel() {
    return ( 
        <View style={styles.container}>
            <View style={styles.body}>
                <Swiper style={styles.wrapper} showsButtons={true} >
                    <Card style={styles.card}/>
                    <Card style={styles.card}/>
                </Swiper>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    wrapper: {
        color: 'red'
      },
    header:{
        backgroundColor:'#FFF5F5',
        height:30,
        width: '100%',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 15,
    },
    body:{
        flex:4,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical: 100,
        height: 400
    },
})
export default Panel;