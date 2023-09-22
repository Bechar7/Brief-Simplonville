import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {removeIncident} from "../feature/incidentDataSlice";
import {useNavigation} from "@react-navigation/native";

const FinalValidationPage = ({navigation}) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.incidentData.incident)
    // const navigation = useNavigation()

    const backHomePage = () => {
        navigation.popToTop()
        dispatch(removeIncident(data))
    }
    return (
        <View style={{alignItems: 'center', marginTop: 100}}>
            <Text style={styles.mainItem}>L'incident à bien été transféré au service concerné.</Text>
            <Text style={styles.mainItem}>La commune <Text style={{color: '#CE0033'}}>Simplonville</Text> vous remercie.</Text>
            <TouchableOpacity style={styles.btn} onPress={backHomePage}>
                <Text style={{color: 'white', fontWeight: '800'}}>Revenir à la page d'accueil</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainItem: {
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10
    },
    btn: {
        height: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CE0033',
        borderRadius: 10,
        marginTop: 100
    }
})
export default FinalValidationPage;