import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'

export default function ButtonStyled( { children, onPressFunc, enabled } ) {
    const BORDERCOLOR = enabled ? '#1a0d91' : 'gray'
    return (
        <>
            <TouchableOpacity 
                onPress={ () => { if (enabled == true) { onPressFunc() }}}
                style={styles(BORDERCOLOR).button}
            >
                {children}
            </TouchableOpacity>
        </>
    )
}
const styles = (props) => StyleSheet.create({
    button:{
        width: 40,
        height: 40,
        borderColor: props,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        margin: 0,
        padding: 0,
    }
})

