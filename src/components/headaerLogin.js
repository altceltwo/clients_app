import React from 'react'
import {Text,StyleSheet,View, SafeAreaView,TextInput, Pressable, Image, ScrollView} from 'react-native'

function HeaderLogin() {
    return (  
        <View style={styles.logo}>
            <View>
                <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/>
            </View>
            <View>
                <Text style={styles.colorPlaceHolder}>Hola Mundo</Text>
                <Image  source={require('../../assets/img/logo.png')}/>
            </View>
            <Image style={styles.network} source={require('../../assets/img/Social-network.gif')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:300,
        width: '100%',
        flexDirection:'row',
    },
    burbuja:{
        height:300,
        width:400,
        transform: [{ rotate: '40deg' }],
        marginTop: -108
    },
    logo:{
        // backgroundColor:'red',
        height: 50,
        padding: 20,
        marginBottom:60,
        flexDirection:'row',
      },
      altcel:{
        height: 130,
        width:'100%',
        marginTop: 70,
        marginLeft: 120
      },
      network:{
        height: 130,
        width:350,
        marginTop: -20,
        marginLeft: 50
      },
})

export default HeaderLogin;