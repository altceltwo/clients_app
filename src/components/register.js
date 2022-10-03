import React, { useState  } from 'react'
import {Text,StyleSheet,View, SafeAreaView,TextInput, Pressable, Image, ScrollView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Register() {
    const navigation = useNavigation(); 

    const [nombreCompleto, setNombreCompleto] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmar, setPasswordConfirmar] = useState('')

    const handRegistro = () => {
        if([nombreCompleto, correo, telefono, password, passwordConfirmar].includes('')){
            console.log('campos vacios')
            return
        }

        const agregarRegistro = {
            nombreCompleto,
            correo,
            telefono,
            password,
            passwordConfirmar
        }

        console.log(agregarRegistro)
    }

    return (  
        
    <View style={styles.container}>
        <ScrollView>
                <TouchableOpacity 
                    style={styles.returnImg}
                    onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.return_Img} source={require('../../assets/img/return.png')}/>                        
                </TouchableOpacity> 
                <View style={[styles.header,{flex:1}]}>
                    <View style={styles.cont2}>
                        <Image style={styles.altcel} source={require('../../assets/img/logo.png')}/>                        
                    </View>
                    <View style={styles.logo}>
                        <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/>
                    </View>
                </View>

                <View style={styles.contenido}>
                    <View>
                        <Text style={[styles.textoCuenta, styles.tituloBold]}>Crea tu cuenta</Text>
                        <Text style={styles.textoInformacion}>Ingresa tu información</Text>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre completo</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#666'}
                                value={nombreCompleto}
                                onChangeText={setNombreCompleto}
                            />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Correo electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#666'}
                                keyboardType='email-address'
                                value={correo}
                                onChangeText={setCorreo}
                            />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfeno</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#666'}
                                keyboardType='number-pad'
                                maxLength={10}
                                value={telefono}
                                onChangeText={setTelefono}
                            />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#666'}
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Confirmar contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#666'}
                                secureTextEntry
                                value={passwordConfirmar}
                                onChangeText={setPasswordConfirmar}
                            />
                    </View>

                    <Pressable 
                        style={styles.btnNuevoRegistro}
                        onPress={handRegistro}
                        >
                        <Text style={styles.btnNuevoRegistroTexto}> Registrarse </Text>
                    </Pressable>

                    <View>
                        <Text style={styles.textoRegistrar}>¿Aún no tienes una cuenta? Registrate</Text>
                    </View>
                </View>
        </ScrollView>
    </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        height: 215,
        width: '100%',
        flexDirection:'row',
    },
    cont2:{
        height: 50,
        width: '50%',
    },
    burbuja:{
        height:300,
        width:300,
        transform: [{ rotate: '30deg' }],
        marginTop: -135
    },
    logo:{
        height: 50,
        padding: 20,
        marginBottom:60,
        flexDirection:'row',
    },
    altcel:{
        height: 130,
        width:'100%',
        marginTop: 70,
        marginLeft: 105
    },
    returnImg:{
        height: 50,
        width: '50%',
    },
    return_Img:{
        height: 20,
        width:'12%',
        marginTop: 20,
        marginLeft: 17
    },
    textoCuenta:{
        color: 'red',
        fontSize: 40,
        textAlign: 'center',
        // padding: 25
        marginHorizontal: 25,
        marginTop: 30

    },
    textoInformacion:{
        color: '#464749',
        fontSize:20,
        textAlign: 'center',
        marginTop: 5
    },


    contenido: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: "#000",
        borderColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 5.84,
       elevation: 20,
   },

   tituloBold: {
        fontWeight: '900'
   },

   btnNuevoRegistro:{
    marginVertical: 50,
    backgroundColor: 'red',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 50
    },

    btnNuevoRegistroTexto:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },

   campo: {
        marginTop: 4,
        marginHorizontal: 15,
        borderRadius: 2,
        borderColor: '#000'    
    },
   label: {
        color: '#434345',
        marginBottom: 5,
        marginTop: 15,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '600',
   },
   input: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 50,
        borderColor: '#d5d9dc',
        borderWidth: 2,
        color: '#000',
        fontSize: 20
   },
   textoRegistrar:{
    color: '#464749',
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 1,
    marginVertical: -35
   }
      
})

export default Register;