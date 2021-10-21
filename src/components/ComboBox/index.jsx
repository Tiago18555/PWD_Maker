import React from 'react'
import { View, TouchableOpacity, Text, SectionList, StyleSheet } from 'react-native'
import { setEncodingType, toggleShowList, enableButton } from "../../store/shared/shared.actions";
import { useDispatch } from "react-redux";

export default function Combobox () {

    const dispatch = useDispatch()
    
    const Item = ({ title }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={ () => {
                dispatch(setEncodingType(title))
                dispatch(toggleShowList())
            }}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );

    const DATA = [
        {
          title: 'Decodables',
          data: ['BASE64', 'HEX']
        },
        {
          title: 'Undecodables',
          data: ['SHA1', 'SHA256', 'SHA384', 'SHA512']
        }
      ];

    return (
        <>
            <View>
                <SectionList
                    sections={DATA}
                    keyExtractor={( item, index ) => item + index}
                    renderItem={({ item }) => (
                      <Item title={item} />
                    )}
                    
                    renderSectionHeader={({ section: { title } }) => 
                        <Text style={styles.header}>{title}</Text>
                    }
                />
            </View>         
        </>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#5E81AC',
        padding: 5,
        marginVertical: 1,
        height: 30,
		width: '100%',
    },
    header: {
      fontSize: 20,
      backgroundColor: '#81A1C1',
      paddingLeft: 20,
      fontWeight: "700",
      color: '#ECEFF4'
    },
    title: {
      fontSize: 16,
      paddingLeft: 20,
      color: '#FFFFFF',
    },
});