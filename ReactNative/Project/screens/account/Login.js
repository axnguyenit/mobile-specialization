import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    TextInput,
} from 'react-native';

import styles from './styles'
import success from '../../assets/images/success.png';
import Icon, { Icons } from '../../components/icons';
import Input from '../../components/input';
import Button from '../../components/button';

export function Login() {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <View style={styles.flex1}>
            <View style={styles.container}>
                <View>
                    <View style={styles.success}>
                        <Image source={success} style={styles.successImg}/>
                    </View>

                    <View>
                        <View>
                            <Input 
                                label='Email'
                                placeholder='Enter your email'
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Input 
                                secureTextEntry={showPassword}
                                label='Password'
                                placeholder='Enter your password'
                            />
                            <TouchableOpacity
                                style={styles.passwordIcon}
                                onPress={() => (!showPassword)}
                            >
                                <Icon
                                    type={Icons.Ionicons}
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    color='#5C595A'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={styles.forgotPass}>
                                <Text>Forgot password ?</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Button 
                                color='#fff'
                                bg='#DB147F'
                                label='Login'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.contact}>
                    <Text style={{ textAlign: 'center', }}>
                        <Text>If you have trouble logging in to KindiCare CRM, </Text>
                        <TouchableOpacity>
                            <Text style={{
                                textAlign: 'center',
                                color: '#DB147F'
                                }}
                            >
                                please contact our Customer Care team.
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
}

