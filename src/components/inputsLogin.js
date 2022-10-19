
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, TextInput, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function InputsLogin() {
    const navigation = useNavigation(); 
    const [user, setUser] = useState('');
    const [pasword, setPassword] = useState('');

    const handIngresar  = () =>{
        const userOpen = {
            user,
            pasword
        }
        console.log(userOpen)
    } 
    return ( 
        <View>
            <Text style={styles.textSesion}>Iniciar Sesión</Text>
            <Text style={styles.subText}>Estamos contentos de verte.</Text>
            <View style={styles.campo}>
                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Usuario' value={user} onChangeText={setUser} />
            </View>

            <View style={styles.campo}>
                <TextInput style={styles.input} secureTextEntry placeholderTextColor="#000" placeholder='Contraseña' value={pasword} onChangeText={setPassword}/>
            </View>
            <Pressable style={styles.submitBtn} onPress={() => navigation.replace('Panel')}>
            {/* <Pressable style={styles.submitBtn} onPress={handIngresar}> */}
                <Text style={styles.submitBtnTexto}>Ingresar</Text>
            </Pressable>
            <View style={{flexDirection:'row', marginHorizontal: 20}}>
                <Text style={styles.registrarse}>¿Aun no tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={[styles.registrarse , styles.colorResgistrar]}> Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#d0d3d4',
        padding: 10,
        borderRadius: 20,
        color: '#000',
        marginTop: 10,
        fontSize: 20
    },
    submitBtn:{
        backgroundColor: 'red',
        padding: 11,
        marginVertical: 20,
        marginHorizontal: 11,
        marginLeft: -2,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20
    },
    campo:{
        marginVertical:10,
        marginHorizontal: 10,
        marginLeft: -1
    },
    registrarse:{
        color: '#000',
        textAlign: 'center',
        fontSize: 17
    },
    textSesion:{
        color:'red',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 20
      },
      colorResgistrar:{
        color: 'red'
      },
})
export default InputsLogin;