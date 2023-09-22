import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, StyleSheet, TextInput, Image} from "react-native";
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location';
import home from "../page/Home";


const Map = ( { address, setAddress, setMyAddress, myAddress } ) => {
    const [location, setLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [idButton, setIdButton] = useState();


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    const getCurrentLocation = async () => {
        let test = await Location.getCurrentPositionAsync();
        let addresses = await Location.reverseGeocodeAsync({
            latitude: test.coords.latitude,
            longitude: test.coords.longitude
        })
        // console.log(addresses)
        for (let item of addresses) {
            let address = `${item.streetNumber} ${item.street} ${item.postalCode}, ${item.city}`;

            setMyAddress(address);
        }
        console.log(myAddress)
    }

    const getMyLocation = async () => {
        if (selectedLocation) {
            let addresses = await Location.reverseGeocodeAsync(selectedLocation)

            for (let item of addresses) {
                let address = `${item.streetNumber} ${item.street} ${item.postalCode}, ${item.city}`;

                setAddress(address);
                // setMyAddress('')
                // console.log(address)
            }
            // await setAddress(`${streetNumber} ${street} ${postalCode} ${city}, ${country}`)
        }
    }
    getMyLocation()

    const handleMapPress = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setSelectedLocation({ latitude, longitude });
    };

    return (
        <>
            <View style={{alignSelf: 'center', marginTop: 10}}>
                <Text>
                    L'incident a eu lieu à votre adresse ?
                </Text>
                <View style={{flexDirection: 'row', marginVertical: 15, alignSelf: 'center'}}>
                    <Pressable style={[styles.homeIncidentButton, idButton === 1 && {backgroundColor: '#CE0033'}]} onPress={() => setIdButton(1)}>
                        <Text style={idButton === 1 ? {color: 'white'} : {color: '#CE0033'}}>Oui</Text>
                    </Pressable>
                    <Pressable style={[styles.homeIncidentButton, idButton === 2 && {backgroundColor: '#CE0033'}]} onPress={() => setIdButton(2)}>
                        <Text style={idButton === 2 ? {color: 'white'} : {color: '#CE0033'}}>Non</Text>
                    </Pressable>
                </View>
            </View>
            {
                idButton === 2 ?
                <MapView style={{width: '90%', height: 200, alignSelf: 'center', borderRadius: 10, marginVertical: 10}} showsUserLocation onPress={handleMapPress}>
                    {selectedLocation &&  (
                        <Marker
                            coordinate={selectedLocation}
                            draggable
                            onDragEnd={(e) => {
                                const { latitude, longitude } = e.nativeEvent.coordinate;
                                setSelectedLocation({ latitude, longitude });
                            }}
                        />
                    )}
                </MapView>
                    :
                    idButton === 1 &&
                    <View style={{alignSelf: 'center'}}>
                        <Pressable style={styles.geoLocationButton} onPress={getCurrentLocation}>
                            <Image style={{width: 20, height: 20, marginRight: 10}} resizeMode='contain' source={require('../../img/geolocalisation.png')} />
                            <Text>Me géolocaliser</Text>
                        </Pressable>
                        <Text style={{textAlign: 'center', marginVertical: 15}}>ou</Text>
                        <TextInput value={getCurrentLocation ? myAddress : ''} placeholder='Mon adresse' style={{borderStyle: 'solid', borderWidth: 1, borderColor: '#2D2D2D', padding: 10, borderRadius: 10, width: 300}} />
                    </View>
            }

            {
                selectedLocation ?
                    <Text>
                        L'adresse de l'incident est : {address}
                    </Text>
                    :
                    <></>
            }

        </>
    );
};

const styles = StyleSheet.create({
    homeIncidentButton: {
        height: 20,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CE0033'
    },
    geoLocationButton: {
        height: 40,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: '#2D2D2D',
        // backgroundColor: 'blue',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,

    }
})

export default Map;