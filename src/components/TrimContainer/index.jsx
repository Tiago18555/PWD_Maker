import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RadioButton } from 'react-native-paper';
import ButtonStyled from '../ButtonStyled';

export default function TrimContainer() {
    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState('first');
    return (
        <>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    keyboardType='number-pad'
					maxLength={2}
                />
            <View style={styles.rbContainer}>
                <Text style={styles.label}>First</Text>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                    style={styles.rbtn}
                />      
            </View>

            <View style={styles.rbContainer}>
                <Text style={styles.label}>Last</Text>
                <RadioButton
                    value="last"
                    status={ checked === 'last' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('last')}
                    style={styles.rbtn}
                />      
            </View>

            <View style={styles.rbContainer}>
                <Text style={styles.label}>All</Text>
                <RadioButton
                    value="all"
                    status={ checked === 'all' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('all')}
                    style={styles.rbtn}
                />
            </View>
            <ButtonStyled
                iconName='copy-outline'
                iconSize={39}
                enabled={true}
                onPressFunc={() => {}}
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
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
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