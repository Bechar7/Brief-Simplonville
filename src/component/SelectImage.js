import React, { useState, useEffect } from 'react';
import {Button, Image, View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SelectImage( {image, setImage} ){



    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <>
            <Pressable onPress={pickImage} style={styles.button}>
                <Text style={{color: '#2D2D2D'}}>Choisissez une photo</Text>
            </Pressable>
                {image && <Image source={{ uri: image }} resizeMode='contain' style={styles.image} />}
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').height <= 900 ? 200 : 280,
        height: Dimensions.get('window').height <= 900 ? 200 : 280,
        borderRadius: 10,
        alignSelf: 'center'
    },
    button: {
        height: 30,
        width: 150,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor:  '#2D2D2D',
        borderStyle: 'solid',
        borderWidth: 1
    }
});