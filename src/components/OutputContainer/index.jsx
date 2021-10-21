import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import TrimContainer from '../TrimContainer'

export default function OutputContainer() {
    const result = useSelector(state => state.data.output)

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text 
                        style={styles.result}
                        selectable={true}
                        numberOfLines={0}
                        ellipsizeMode='clip'
                        //onLongPress={() => Clipboard.setString(result)}
                    >
                        {result}
                    </Text>
                </View>
                <View>
                    <TrimContainer />
                </View>
            </View>
        </>
    )
}
    
const styles = StyleSheet.create({
    container : {
        padding: 0,
        color: '#EEEEEE',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
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
    },
    result : {
        fontSize: 25,
        color: '#17104a',
        marginHorizontal: '5%',
        marginVertical: '7%',       
    }
});