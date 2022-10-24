import React, { useState, useEffect  } from 'react'
import {Text,StyleSheet,View, TextInput, Pressable, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';




function Register() {
    
    const navigation = useNavigation(); 

    const [accesoLoaded, setAccesoLoaded] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // useEffect(() => {
            const obtenerPresupuestoStorage = async () => {
                try {
                    const nameStorage = await AsyncStorage.getItem('nameStorage') ?? ''
                    const emailStorage = await AsyncStorage.getItem('emailStorage') ?? ''
                    const phoneStorage = await AsyncStorage.getItem('phoneStorage') ?? ''
                    const passwordStorage = await AsyncStorage.getItem('passwordStorage') ?? ''
                    // console.log("nameStorage: ",nameStorage)
                    if(nameStorage ){
                        console.log(nameStorage)
                        console.log(emailStorage)
                        console.log(phoneStorage)
                        console.log(passwordStorage)

                    //setName(nameStorage)
                    // setEmail(emailStorage)
                    // setPhone(phoneStorage)
                    // setPassword(passwordStorage)
                    setAccesoLoaded(true)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            // obtenerPresupuestoStorage();
        // },[])
      
    
      useEffect(() => {
        if(accesoLoaded){
          const guardarStorage = async () => {
            try {
              await AsyncStorage.setItem('nameStorage', JSON.stringify(name)),
              await AsyncStorage.setItem('emailStorage', JSON.stringify(email)),
              await AsyncStorage.setItem('phoneStorage', JSON.stringify(phone)),
              await AsyncStorage.setItem('passwordStorage', JSON.stringify(password))
    
            } catch (error) {
                console.log(error)
            }
          }
          guardarStorage();
        }
      },[accesoLoaded])

    const handRegistro = async () => {
        
        console.log(password.length);

        if([name, email, phone, password, passwordConfirm].includes('')){
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios"
              )
            return
        }

        if(password != passwordConfirm){
            Alert.alert(
                "Error",
                "La contraseña debe coincidir"
              )
            return
        }
        if(password.length < 8 || password.length > 8){
            Alert.alert(
                "Error",
                "La contraseña debe tener 8 caracteres"
              )
            return
        }

        if (!isValidEmail.test(email)) {
            Alert.alert(
                "Error",
                "Ingresa un correo electrónico válido"
              )
            return
          }
          
        try {
            const response = await fetch('https://appmobile.altcel2.com/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                    passwordConfirm
                })
            }) 
            
            .then((response) => {
                // console.log(response);
                if(response.status == 400)
                {
                    Alert.alert(
                        "Error"+' '+response.status,
                        "Número se encuentra registrado"
                      )
                    return
                } else{
                    Alert.alert(
                        "Success",
                        "Registro Existoso"
                      )
                        obtenerPresupuestoStorage();
                        navigation.replace('Panel');
                    return
                }
            })

            
            // .then((response) => response.json())
            // .then((data) => {
            //     console.log(data)
            //     if(data.http_code == '400'){
            //         Alert.alert(
            //             "Error"+' '+data.http_code,
            //             "Número se encuentra registrado"
            //           )
            //         return
            //     }
            //    console.log('Success:', data.status);
            // }
            // );

            const {nombre, correo, telefono, contrasenia} = await response.json()

            setName(nombre)
            setEmail(correo)
            setPhone(telefono)
            setPassword(contrasenia)

        }catch(error){
            console.log(error)
        }
    }


    return (  
        
    <View style={styles.container}>
        
                <View style={[styles.header,{flex:1}]}>
                    <View style={styles.cont2}>
                        <Image style={styles.altcel} source={require('../../assets/img/logo.png')}/>                        
                    </View>
                    <View style={styles.logo}>
                        <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/>
                    </View>
                </View>

                <View style={styles.contenido}>
                <ScrollView>
                        <View>
                            <Text style={[styles.textoCuenta, styles.tituloBold]}>Crea tu cuenta</Text>
                            <Text style={styles.textoInformacion}>Ingresa tu información</Text>
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.label}>Nombre completo</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#666'}
                                    value={name}
                                    onChangeText={setName}
                                />
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.label}>Correo electrónico</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#666'}
                                    keyboardType='email-address'
                                    value={email}
                                    onChangeText={setEmail}
                                />
                        </View>

                        <View style={styles.campo}>
                            <Text style={styles.label}>Teléfeno</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={'#666'}
                                    keyboardType='number-pad'
                                    maxLength={10}
                                    value={phone}
                                    onChangeText={setPhone}
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
                                    value={passwordConfirm}
                                    onChangeText={setPasswordConfirm}
                                />
                        </View>

                        <Pressable 
                            style={styles.btnNuevoRegistro}
                            onPress={handRegistro}
                            >
                            <Text style={styles.btnNuevoRegistroTexto}> Registrarse </Text>
                        </Pressable>

                        <View style={{flexDirection:'row', marginHorizontal: 50, marginTop:-30, marginBottom: 30}}>
                            <Text style={styles.registrarse}>¿Ya tienes una cuenta? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[styles.registrarse , styles.colorResgistrar]}> Iniciar sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
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
        marginTop: -350,
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
   },
   colorResgistrar:{
    color: 'red'
  },
  registrarse:{
    color: '#000',
    textAlign: 'center',
    fontSize: 17
},
      
})

export default Register;