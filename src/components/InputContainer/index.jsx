import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import ButtonStyled from '../ButtonStyled'
import List from '../List';
import Input from '../Input'
import encrypt from '../../store/services';
import { setOutput, enableButton } from '../../store/shared/shared.actions';



export default function InputContainer() {

    const enabled = useSelector(state => state.enableButton)
    const keyword = useSelector(state => state.data.input)
    const encode = useSelector(state => state.data.encoding)
    const text = useSelector(state => state.data.input)
    const dispatch = useDispatch()
    useEffect( () => {
        if(text.length >= 3 && encode !== '')
          dispatch(enableButton(true))
        else { dispatch(enableButton(false)) }
      }, [encode])

    return (
        <>
            <View style={styles.container}>

                <Input 
                    placeholder= "ENTRADA"
                />

                <ButtonStyled 
                    onPressFunc={( async () => {
                        dispatch(setOutput(await encrypt( keyword, encode )))
                    })}
                    enabled={enabled}
                    iconName={"play"}
                    iconSize={35}
                />
            </View>
            
            <List />
        </>
    )
}

    
const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 0,
        color: '#8fbcbb',
        marginBottom: 20,
		backgroundColor: '#81A1C1',
        paddingVertical: 5,
    },
});