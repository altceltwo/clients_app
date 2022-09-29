import React from 'react'
import {Text,StyleSheet,View, SafeAreaView,TextInput, Pressable, Image, ScrollView} from 'react-native'

function Panel() {
    return ( 
        <View>
            <Text style={styles.text}>Hola Panel</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    text:{
        color: 'black'
    }
})
export default Panel;