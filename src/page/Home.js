import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from "react-native";

// height: Dimensions.get('window').height <= 900 ? 200 :
const Home = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>simpl<Image style={{width: 47, height:47}} source={require('../../img/logo.png')} />nville</Text>
            {/*<Button title='Accéder au formulaire pour déclarer un incident' onPress={() => navigation.navigate('FormPage')}/>*/}
            <Image resizeMode='contain' style={{height: 400 , width: '90%'}}  source={require('../../img/iconHome.jpg')} />
            <Text style={[{marginTop: -60}, styles.text]}>"Une application par nous, pour vous, pour nous."</Text>
            <Text style={[{textDecorationLine: 'underline'}, styles.text]}>Signé, le maire.</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormPage')}>
                <Text style={styles.textBtn}>Déclarer un incident</Text>
                <Image style={{width: 30, height: 30, marginLeft: 15}} source={require('../../img/telephone.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 45,
        marginTop: 50,
        color: '#CE0033'
    },
    text: {
        fontSize: 12,
        textAlign: 'right',
        width: '100%',
        marginRight: 20,
        color: '#2D2D2D'
    },
    button: {
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#CE0033',
        flexDirection: 'row',
        marginTop: 100,
        borderRadius: 10
    },
    textBtn: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    }
})
export default Home;