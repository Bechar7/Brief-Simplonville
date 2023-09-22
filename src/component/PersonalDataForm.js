import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {addIncident} from "../feature/incidentDataSlice";

export default function PersonalDataForm( { personalData, setPersonalData, myAddress } ) {
    const navigation = useNavigation()
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [person, setData] = useState()
    const dispatch = useDispatch()

    const onSubmit = data => {
        data && dispatch(addIncident(Object.values(data)))
        navigation.navigate('FinalPage')
    };

    return (
        <View  style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Nom</Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.inputName}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="firstName"
                        rules={{ required: true }}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Prénom</Text>
                    <Controller
                        control={control}
                        render={({field: { onChange, onBlur, value }}) => (
                            <TextInput
                                style={styles.inputName}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                            />
                        )}
                        name="lastName"
                        rules={{ required: true }}
                    />
                </View>
            </View>

            <Text style={styles.label}>Adresse Mail</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="mail"
                rules={{ required: true }}
            />

            <Text style={styles.label}>Adresse postale</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={myAddress ? myAddress : value}
                    />
                )}
                name="address"
                rules={{ required: true }}
            />

            <Text style={styles.label}>Numéro de téléphone</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="phoneNumber"
                rules={{ required: true }}
            />


            {/*{errors.email && <Text style={styles.errorText}>Le nom est obligatoire.</Text>}*/}

            <Text style={{fontStyle: 'italic', fontSize: 13, marginTop: 40}}>* Tous les champs sont obligatoires</Text>
            <View style={styles.button}>
                <Button
                    // style={styles.buttonInner}
                    color='white'
                    title="Valider"
                    // disabled={Object.keys(errors).length > 0 ? false : true }
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    label: {
        // color: 'white
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 10,
        color: 'white',
        height: 40,
        backgroundColor: '#CE0033',
        borderRadius: 4,
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        width: '90%',
        // paddingTop: Constants.statusBarHeight,
        padding: 8,
        // backgroundColor: '#0e101c',
    },
    inputName: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
        borderColor: '#2D2D2D',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#2D2D2D',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 40,
        padding: 10,
        borderRadius: 4,
        width: '95%',
        alignSelf: 'center'
    },
    inputRow: {
        flexDirection: 'column',
        width: '45%',
        marginHorizontal: 10,

    }
});