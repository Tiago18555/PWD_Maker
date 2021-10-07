import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

export default function Button( { onPressFunc, children } ) {
    <TouchableOpacity
        onPress={ () => onPressFunc() }
    >
        <Button>
            {children}
        </Button>
    </TouchableOpacity>
}
