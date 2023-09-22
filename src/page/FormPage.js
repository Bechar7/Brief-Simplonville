import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import AlertDate from "../component/AlertDate";
import Map from "../component/Map";
import SuiviEtape from "../component/SuiviEtape";
import SelectImage from "../component/SelectImage";
import PersonalDataForm from "../component/PersonalDataForm";
import { useDispatch } from 'react-redux'
import {addIncident} from "../feature/incidentDataSlice";

const FormPage = () => {
    const [state, setState] = useState(1)
    const data = ["Voirie", "Stationnement", "Travaux", "Chien perdu"]
    const [selectItem, setSelectItem] = useState('')
    const [describeAlert, setDescribeAlert] = useState('')
    const [alertDate, setAlertDate] = useState('')
    const [alertTime, setAlertTime] = useState('')
    const [address, setAddress] = useState('')
    const [myAddress, setMyAddress] = useState('')
    const [image, setImage] = useState(null);

    const [personalData, setPersonalData] = useState()
    const dispatch = useDispatch()

    // console.log(describeAlert)

    const handlePress = () => {
        console.log(address)
        //rstate === 1 && selectItem && describeAlert ? setState(2) : state === 2 && address && alertDate && alertTime || myAddress && alertDate && alertTime && setState(3);
        if (state === 1 && selectItem && describeAlert){
            setState(2)
        }else if(state === 2 && address && alertDate && alertTime || myAddress && alertDate && alertTime){
            setState(3)
        }
        selectItem && dispatch(addIncident(selectItem));
        describeAlert && dispatch(addIncident(describeAlert));
        if(address && myAddress){
            setMyAddress()
            dispatch(addIncident(address))
        }
        myAddress && dispatch(addIncident(myAddress))
        alertDate && dispatch(addIncident(alertDate))
        alertTime && dispatch(addIncident(alertTime))
        personalData && dispatch(addIncident(personalData))
        image && dispatch(addIncident(image))
        // console.log("data : " + personalData)
    }

    return (
        <View style={styles.container}>
            <SuiviEtape
                state={state}
            />
            {
                state === 1 ?
                    <>
                        <Text style={[{marginVertical: 20}, styles.titles]}>
                            Choisissez le type d'alert :
                        </Text>
                        <SelectDropdown
                            data={data}
                            defaultButtonText= "Selectionner un type"
                            onSelect={(selectedItem, index) => {
                                setSelectItem(selectedItem)
                            }}
                        />
                        <View style={{marginTop: 30, width: '100%'}}>
                            <Text style={[{textAlign: 'center'}, styles.titles]}>Veuillez décrire l'alerte :</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDescribeAlert}
                            />
                        </View>
                        <View style={{width: '100%'}}>
                            <Text style={[{textAlign: 'center', marginVertical: 20}, styles.titles]}>Pourriez-vous nous envoyer une image de cet incident ? Ou une photo du chien disparu ?</Text>
                            <SelectImage
                                setImage={setImage}
                                image={image}
                            />
                        </View>
                    </> :
                    state === 2 ?
                        <View style={{marginTop: 30, width: '100%'}}>
                            <Text style={[{textAlign: 'center'}, styles.titles]}>Où est-ce que l'incident à eu lieu ?</Text>
                            <Map address={address} setAddress={setAddress} myAddress={myAddress} setMyAddress={setMyAddress}/>
                            <Text style={[{textAlign: 'center', marginTop: 30}, styles.titles]}>À quel moment l'incident à eu lieu ?</Text>
                            <AlertDate
                                alertTime={alertTime}
                                setAlertTime={setAlertTime}
                                alertDate={alertDate}
                                setAlertDate={setAlertDate}
                            />
                        </View>
                        :
                        state === 3 &&
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <Text style={[styles.titles, {marginTop: 30}]}>Informations personnelles</Text>
                            <PersonalDataForm
                                personalData={personalData}
                                setPersonalData={setPersonalData}
                                myAddress={myAddress}
                            />
                        </View>
            }
            <TouchableOpacity style={[styles.nextButton, state === 3 && {display: 'none'}]} onPress={handlePress}>
                <Text style={{color: 'white', fontWeight: '600'}}>
                    {state === 1 || state === 2 ? 'Suivant' : 'Valider'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F5F8'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontWeight: '500'
    },
    titles: {
        color: '#CE0033',
        fontSize: 17
    },
    nextButton: {
        backgroundColor: '#CE0033',
        height: 40,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
        // position: 'absolute',
    }
})

export default FormPage;