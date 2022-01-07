import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
    const { bg, color, label } = props;
    return (
        <TouchableOpacity style={{
            backgroundColor: bg,
            paddingVertical: 14,
            alignItems: 'center',
            borderRadius: 4
        }}>
            <Text style={{ color: color, fontWeight: 'bold' }}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;