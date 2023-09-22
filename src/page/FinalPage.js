import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {useSelector} from "react-redux";
import * as MailComposer from 'expo-mail-composer';


export default function FinalPage( {navigation} ){

    const data = useSelector(state => state.incidentData.incident)

    useEffect(() => {
        data && console.log(data)
    }, [])

    const mailer = async() => {
        const body = `Le type d'incident est ${data[0]}. ${'\n'} Description : ${data[1]}. ${'\n'} Incident survenue à ${data[2]} le ${data[3]} à ${data[4]}`
        MailComposer.composeAsync({
            recipients: data[0] === 'Voirie' ? ['voirie@simplonville.co'] : data[0] === 'Chien perdu' ? ['animaux@simplonville.co'] : ['elyesbechar@gmail.com'],
            subject: "Incident",
            body: body
        }).then(res => res.status === 'sent' && navigation.navigate('FinalValidationPage'))
            .catch(() =>
            Alert.alert("Unable To Send Feedback", undefined, [
                {
                    text: "Copy feedback email",
                    onPress: () => Clipboard.setString("elyesbechar@gmail.com")
                },
                {
                    text: "OK"
                }
            ])
        );
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.titles, {marginTop: 30}]}>Récapitulatif</Text>
            <Text style={styles.subTitle}>Type d'incident : </Text>
            <Text style={styles.data}>{data[0]}</Text>
            <Text style={styles.subTitle}>Description : </Text>
            <Text style={styles.data}>{data[1]}</Text>
            <Text style={styles.subTitle}>Date et heure : </Text>
            <Text style={styles.data}>Le {data[3]} à {data[4]}</Text>
            <Text style={styles.subTitle}>Lieu :</Text>
            <Text style={styles.data}>{data[2]}</Text>
            <Text style={styles.subTitle}>Données personnelles : </Text>
            <Text style={styles.data}>Nom : {data[5][0]}</Text>
            <Text style={styles.data}>Prénom : {data[5][1]}</Text>
            <Text style={styles.data}>Mail : {data[5][2]}</Text>
            <Text style={styles.data}>Adresse postale : {data[5][3]}</Text>
            <Text style={styles.data}>Numéro de téléphone : {data[5][4]}</Text>

            <TouchableOpacity style={styles.btn} onPress={mailer}>
                <Text style={styles.textBtn}>Valider et envoyer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titles: {
        color: '#CE0033',
        fontSize: 22
    },
    subTitle: {
        color: '#CE0033',
        fontSize: 17,
        marginTop: 20
    },
    data: {
        marginTop: 5
    },
    btn: {
        height: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CE0033',
        marginTop: 90
    },
    textBtn: {
        color: 'white',
        fontWeight: '800',
        fontSize: 16
    }
})
