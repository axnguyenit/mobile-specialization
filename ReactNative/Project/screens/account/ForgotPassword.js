import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles';
import Icon, { Icons } from '../../components/icons';
import Input from '../../components/input';
import Button from '../../components/button';

const ForgotPassword = (props) => {
    return (
        <View style={styles.flex1}>
            <View style={styles.container}>
                <View style={styles.goBack}>
                    <TouchableOpacity>
                        <Icon
                            type={Icons.AntDesign}
                            name='arrowleft'
                            color='#857E7F'
                            size={24}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.heading}>Forgot password</Text>
                    <Text style={{ marginVertical: 15 }}>Please enter your email address to get reset link</Text>
                </View>

                <View>
                    <Input
                        label='Email'
                        keyboardType="email-address"
                        placeholder='Enter your email'
                    />
                    <View style={{ marginTop: 20 }}>
                        <Button 
                            color='#fff'
                            bg='#DB147F'
                            label='Get Reset Link'
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ForgotPassword;