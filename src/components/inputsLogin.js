
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, TextInput, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
function InputsLogin() {
    const navigation = useNavigation(); 
    const [user, setUser] = useState('');
    const [pasword, setPassword] = useState('');
    return ( 
        <View>
            <Text style={styles.textSesion}>Iniciar Sesión</Text>
            <Text style={styles.subText}>Estamos contentos de verte.</Text>
            <View style={styles.campo}>
                <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Usuario' value='user' onChangeText={text => setUser(text)} />
            </View>

            <View style={styles.campo}>
                <TextInput style={styles.input} secureTextEntry placeholderTextColor="#000" placeholder='Contraseña' value='password' onChangeText={text => setPassword(text)}/>
            </View>
            <Pressable style={styles.submitBtn} onPress={() => navigation.navigate('Panel')}>
                <Text style={styles.submitBtnTexto}>Ingresar</Text>
            </Pressable>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Text style={styles.registrarse}>¿Aun no tienes cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.registrarse}> Registrate</Text>
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
    },
    submitBtn:{
        backgroundColor: 'red',
        padding: 10,
        marginTop: 20,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    campo:{
        marginVertical:10
    },
    registrarse:{
        color: '#000',
        textAlign: 'center'
    },
    textSesion:{
        color:'red',
        fontSize: 40,
        textAlign: 'center'
      },
      subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 20
      },
})
export default InputsLogin;