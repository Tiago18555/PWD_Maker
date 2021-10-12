import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput, 
    SectionList,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ButtonStyled from '../ButtonStyled';

var keyword;
var encodeType;

export default function InputContainer({ encryptFunction }) {

    const [visible, setVisible] = useState(false)
	const [enabled, setEnabled] = useState(false)
    const [title, setTitle] = useState('')
    const buttonColor = visible ? 'grey' : '#1a0d91'
	const playButtonColor = !enabled ? 'grey' : '#1a0d91'

    const Combobox = () => {

        const Item = ({ title }) => (
            <TouchableOpacity 
                style={styles.item}
                onPress={ () => {
					setTitle(title)
					setVisible(false)
					encodeType = title
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
                        
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                    />
                </View>         
            </>
        );
    }

    return (
        <>
            <View style={styles.container}>

                <Input 
                    placeholder= "ENTRADA"
                    isMultiline= {false}
                />

                <ButtonStyled 
                    onPressFunc={ (async () => { console.log(await encryptFunction( keyword, encodeType ))})}
                    enabled={enabled}
                >
                    <Ionicons
                        name={"play"}
                        size={35}
                        color={playButtonColor}
                    />
                </ButtonStyled>

            </View>

            <View>
                <View style={styles.smallContainer}>

                    <Text 
						style={styles.label}
						adjustsFontSizeToFit={true}
						onChangeText={() => {
							setEnabled( encodeType === null )
							console.log( encodeType )}}	
					>
                        {title}
                    </Text>

                    <ButtonStyled 
                        onPressFunc={() => {setVisible(!visible)}}
                        enabled={!visible}
                    >
                        <Ionicons 
                            name={"chevron-down-outline"}
                            size={35}
                            color={buttonColor}
                        />
                    </ButtonStyled>

                </View>

				{visible && <Combobox />}

            </View>            
        </>
    )
	function Input({ placeholder, isMultiline }) {
		const [text, setText] = useState('');
	
		return(
			<TextInput
				placeholder={placeholder}
				onChangeText={
					text => {
						setText(text)
						keyword = text				
					}
				}
				defaultValue={text}
				multiline={isMultiline}            
				textAlign='right'
				style = {styles.input}       
			/>
		)
	}
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
    input : {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        width: '75%',
        height: 40,
        backgroundColor: '#4C566A',
        color: '#D8DEE9',
        fontSize: 20,
        fontWeight: "700",
        textAlign: 'center',
        margin: 0,
    },
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
	smallContainer: {
		backgroundColor: '#5E81AC',
		display: 'flex',
		flexDirection: 'row',
		justifyContent:'space-around',
		justifyContent: 'center',
		paddingVertical: 5,
		paddingRight: 5,
	},
	label: {
		width: '85%',
		height: '100%',
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 25,
		fontWeight: "600",
	}
});