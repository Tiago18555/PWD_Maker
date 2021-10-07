import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../button';
import { Ionicons } from '@expo/vector-icons';

export default function InputContainer() {
    return (
        <>
            <Input 
                placeholder= "ENTRADA"
                isMultiline= {false}
            />
            <Button>
                <Ionicons
                    name={"play-outline"}
                    size={15}
                    color={"black"}
                />
            </Button>
        </>
    )
}

export function Input( { placeholder, isMultiline } ) {
    const [text, setText] = useState('');

    return(
        <TextInput
            placeholder={placeholder}
            onChangeText={text => setText(text)}
            multiline = {isMultiline}            
        />
    )
}
