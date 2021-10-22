import React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { enableButton, setInput } from '../../store/shared/shared.actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Input({ placeholder }) {
	const [text, setText] = useState()
    const dispatch = useDispatch()
    const encoding = useSelector(state => state.data.encoding)
	
	return(
		<TextInput
			placeholder={placeholder}
			onChangeText={ text => {
				setText(text)
                dispatch(setInput(text))
                if(text.length >= 3 && encoding !== '')
                    dispatch(enableButton(true))
                else { dispatch(enableButton(false)) }		
			}}
            keyboardType='default'
            defaultValue={text}          
			textAlign='right'
			style = {styles.input}       
		/>
	)
}
const styles = StyleSheet.create({
    input : {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#4C566A',
        color: '#D8DEE9',
        fontSize: 20,
        fontWeight: "700",
        textAlign: 'center',
        margin: 0,
        width: '75%',
        height: 40
    },
});