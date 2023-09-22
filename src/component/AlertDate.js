import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";

const AlertDate = ( { alertTime, setAlertTime, alertDate, setAlertDate } ) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    // const [setAlertTime, setAlertTime] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        if (mode === 'date'){
            const timestamp = event.nativeEvent.timestamp
            let test = new Intl.DateTimeFormat("fr-FR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }).format(timestamp);
            setAlertDate(test)
        }else if(mode === 'time'){
            const timestamp = event.nativeEvent.timestamp
            let test1 = new Intl.DateTimeFormat("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }).format(timestamp);
            const [heure, minutes] = test1.split(':')
            const newTime = `${heure}h${minutes}`
            setAlertTime(newTime)
            // console.log(alertTime)
        }
        // console.log(mode)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={{marginTop: 30}}>
            <Pressable style={styles.dateButton} onPress={showDatepicker}>
                <Text style={styles.textButton}>{alertDate ? alertDate.toLocaleString() : 'Date'}</Text>
            </Pressable>
            <Pressable style={styles.dateButton} onPress={showTimepicker}>
                <Text style={styles.textButton}>{alertTime ? alertTime : 'Heure'}</Text>
            </Pressable>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    datePickerStyle: {
        width: 230,
    },
    dateButton: {
        marginVertical: 10,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#CE0033'
    },
    textButton : {
        color: 'white',
        fontWeight: '600'
    }
})
export default AlertDate;