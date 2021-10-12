import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonStyled from '../ButtonStyled';
import { Ionicons } from '@expo/vector-icons';

export default function OutputContainer() {
    return (
        <>
            <View style={styles.container}>

                <Input 
                    placeholder= "SAÍDA"
                    isMultiline= {true}
                    styles={{width: 500}}
                />

            </View>
        </>
    )
}

export function Input( { placeholder, isMultiline } ) {
    const [text, setText] = useState('');
    
    return(
        <TextInput
            placeholder={placeholder}
            onChangeText={text => setText(text)}
            defaultValue={text}
            multiline={isMultiline}
            textAlign='right'
            style = {styles.input}       
        />
    )
}
    
const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 0,
        color: '#EEEEEE',
    },
    input : {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        width: '75%',
        height: 40,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        margin: 0,
    }
});