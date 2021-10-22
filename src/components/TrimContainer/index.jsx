import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import * as Clipboard from 'expo-clipboard'

import ButtonStyled from '../ButtonStyled'
import { setCopySize } from '../../store/shared/shared.actions'
import { trimText } from '../../store/services'

export default function TrimContainer() {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState('all')
    const [icon, setIcon] = useState('copy-outline')
    const data = useSelector(state => state.data)

    return (
        <>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    keyboardType='number-pad'
					maxLength={2}
                    onChangeText={text => dispatch(setCopySize(text))}
                />
            <View style={styles.rbContainer}>
                <Text style={styles.label}>First</Text>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('first')
                    }}
                    style={styles.rbtn}
                />      
            </View>

            <View style={styles.rbContainer}>
                <Text style={styles.label}>Last</Text>
                <RadioButton
                    value="last"
                    status={ checked === 'last' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('last')
                    }}
                    style={styles.rbtn}
                />      
            </View>

            <View style={styles.rbContainer}>
                <Text style={styles.label}>All</Text>
                <RadioButton
                    value="all"
                    status={ checked === 'all' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('all')
                    }}
                    style={styles.rbtn}
                />
            </View>

                <ButtonStyled
                    iconName={icon}
                    iconSize={39}
                    enabled={icon === 'copy-outline'}
                    onPressFunc={() => {
                        switch(checked) {
                            case "all": Clipboard.setString(data.output); break
                            case "first": Clipboard.setString(trimText(data.output, data.copysize, false)); break
                            case "last": Clipboard.setString(trimText(data.output, data.copysize, true)); break
                            default: break
                        }
                        setIcon('checkmark-done-outline')
                        setTimeout(() => setIcon('copy-outline'), 5000)
                    }}
                    size={45}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        width: 80,
        height: 42,
        borderColor: '#1a0d91',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#4C566A',
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    label: {
        textAlign: 'center',
        color: '#1a0d91',
    },
    rbContainer: {
        marginTop: 3,
    },
    rbtn: {
        margin: 0,
    }
})