import React, { useEffect } from "react"
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';

import InputContainer from "../InputContainer"
import OutputContainer from "../OutputContainer"
import { setCopySize } from '../../store/shared/shared.actions'

export default function Home(){
    const ScreenHeight = Dimensions.get("window").height;
    const copysize = useSelector(state => state.data.copysize)
    const dispatch = useDispatch()

    useEffect(() =>  {
        ( async () => {
            try {
              const data = await AsyncStorage.getItem('copysize')
              if (data !== null) {
                dispatch(setCopySize(Number(data)))
                console.log(
                    `COPYSIZE: ${copysize},
                    DATA: ${data}`
                )
              }
            }
            catch(err) {
              alert(err)
              console.log(err)
            }
          })()
    }, [copysize])

    return(
        <>
            <SafeAreaView>
                <View style={styles(ScreenHeight).body}>
                    <Text
                        style={styles().text}
                    >
                        PWD CRYPTO FACTORY
                    </Text>
                    <InputContainer />
                    <OutputContainer />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = (props) => StyleSheet.create({
    body: {
        backgroundColor: '#81A1C1',
        paddingBottom: 10,
        borderColor: '#1a0d91',
        borderStyle: 'solid',
        borderWidth: 2,
        minHeight: props,
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: "500",
    }
})