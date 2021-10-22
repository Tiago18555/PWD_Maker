import React from "react"
import InputContainer from "../InputContainer"
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from "react-native"
import OutputContainer from "../OutputContainer"

export default function Home(){
    const ScreenHeight = Dimensions.get("window").height;

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