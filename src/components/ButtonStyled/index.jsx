import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

export default function ButtonStyled( { onPressFunc, iconName, iconSize, enabled, size = 40 } ) {
    const COLOR = enabled ? '#1a0d91' : 'gray'
    return (
        <>
            <TouchableOpacity 
                onPress={ () => { if (enabled == true) { onPressFunc() }}}
                style={styles(COLOR, size).button}
            >
                <Ionicons 
                    name={iconName}
                    size={iconSize}
                    color={COLOR}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = (borderClr, size) => StyleSheet.create({
    button:{
        width: size,
        height: size,
        borderColor: borderClr,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        margin: 0,
        padding: 0,
    }
})

