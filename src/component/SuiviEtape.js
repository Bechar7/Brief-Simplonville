import React from 'react';
import {View, StyleSheet, Image} from "react-native";

const SuiviEtape = ( { state } ) => {
    return (
        <View style={styles.headerSuivi}>
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={[styles.suivi, state >= 1 && {backgroundColor: '#CE0033'}]}>
                        <Image style={styles.icone} source={require('../../img/numero-1.png')} />
                    </View>
                    <View style={{marginHorizontal: 5}}>
                        <Image style={{width : 10, height: 10}} source={require('../../img/-2x.png')}/>
                    </View>
                    <View style={[styles.suivi, state >= 2 && {backgroundColor: '#CE0033'}]}>
                        <Image style={styles.icone} source={require('../../img/numero-2.png')} />
                    </View>
                    <View style={{marginHorizontal: 5}}>
                        <Image style={{width : 10, height: 10}} source={require('../../img/-2x.png')}/>
                    </View>
                    <View style={[styles.suivi, state >= 3 && {backgroundColor: '#CE0033'}]}>
                        <Image style={styles.icone} source={require('../../img/numero-3.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerSuivi: {
        width: '90%',
        marginTop: 30
    },
    suivi: {
        height: 30,
        width: 30,
        backgroundColor: '#B6BABF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icone: {
        // backgroundColor: 'red',
        width: 20,
        height: 20
    }
})

export default SuiviEtape;