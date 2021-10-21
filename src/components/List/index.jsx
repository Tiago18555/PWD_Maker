import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';

import ButtonStyled from '../ButtonStyled'
import ComboBox from '../ComboBox'
import { toggleShowList } from '../../store/shared/shared.actions';


export default function List() {

    const enabled = useSelector(state => state.showEncoding)
    const encoding = useSelector(state => state.data.encoding)
    const dispatch = useDispatch()

    return (
        <>
            <View>
                <View style={styles.smallContainer}>
                    <Text 
						style={styles.label}
						adjustsFontSizeToFit={true}	
					>
                        {encoding}
                    </Text>

                    <ButtonStyled 
                        onPressFunc={() => dispatch(toggleShowList())}
                        enabled={!enabled}
                        iconName={"chevron-down-outline"}
                        iconSize={35}
                    />

                </View>
				{ enabled && <ComboBox /> }
            </View>            
        </>
    )
}

const styles = StyleSheet.create({
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
