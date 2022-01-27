import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase/config';
import styles from './styles';
import success from '../../assets/icons/auth/success.png';
import Icon, { Icons } from '../../components/icons';
import { Input } from '../../components/input';
import Button from '../../components/button';
import Splash from '../splash';

function Login(props) {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [err, setErr] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    setDisabled(true);
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        user && navigation.navigate('Home');
      })
      .catch((error) => setErr(error.message));
    setDisabled(false);
  };

  const handleOnChange = (text, name) => {
    setUser({ ...user, [name]: text });
    setErr(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user && navigation.navigate('Home');
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.flex1}>
      {disabled && <Splash />}
      <View style={styles.container}>
        <View>
          <View style={styles.success}>
            <Image source={success} style={styles.successImg} />
          </View>

          <View>
            <View>
              <Input
                onChangeText={(text) => handleOnChange(text, 'email')}
                label='Email'
                placeholder='Enter your email'
                keyboardType='email-address'
              />
            </View>

            <View style={styles.mt20}>
              <Input
                onChangeText={(text) => handleOnChange(text, 'password')}
                secureTextEntry={showPassword}
                label='Password'
                placeholder='Enter your password'
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  type={Icons.Ionicons}
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  color='#5C595A'
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {err && (
              <View>
                <Text style={styles.warning}>{err}</Text>
              </View>
            )}
            <View style={styles.forgotPassLink}>
              <TouchableOpacity
                style={styles.forgotPass}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}
              >
                <Text>Forgot password ?</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Button
                color='#fff'
                bg='#DB147F'
                label='Login'
                onPress={handleLogin}
                disabled={disabled}
              />
            </View>
            <View style={styles.btnRegister}>
              <Button
                color='#fff'
                bg='#7B61FF'
                label='Register'
                onPress={() => {
                  navigation.navigate('Register');
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={styles.textCenter}>
            <Text>If you have trouble logging in to KindiCare CRM, </Text>
            <TouchableOpacity>
              <Text style={styles.highLightDesc}>
                please contact our Customer Care team.
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Login;
