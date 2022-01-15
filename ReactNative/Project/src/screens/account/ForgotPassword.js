import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';

import styles from './styles';
import Icon, { Icons } from '../../components/icons';
import { Input } from '../../components/input';
import Button from '../../components/button';
import { auth } from '../../firebase/config';
import { SuccessAlert } from '../../components/alert';

const ForgotPassword = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(null);
  const [visibleAlert, setVisibleAlert] = useState(false);

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setVisibleAlert(true);
      })
      .catch((error) => setErr(error.message));
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.container}>
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              type={Icons.AntDesign}
              name="arrowleft"
              color="#857E7F"
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.heading}>Forgot password</Text>
          <Text style={{ marginVertical: 15 }}>
            Please enter your email address to get reset link
          </Text>
        </View>

        <View>
          <Input
            label="Email"
            keyboardType="email-address"
            placeholder="Enter your email"
            onChangeText={(text) => {
              setEmail(text);
              setErr(null);
            }}
          />
          {err && (
            <View>
              <Text style={styles.warning}>{err}</Text>
            </View>
          )}
          <View style={styles.mt20}>
            <Button
              color="#fff"
              bg="#DB147F"
              label="Get Reset Link"
              onPress={handleResetPassword}
            />
          </View>
        </View>
      </View>
      {visibleAlert && (
        <SuccessAlert
          email={email}
          onPress={() => {
            setVisibleAlert(false);
            navigation.navigate('Login');
          }}
        />
      )}
    </View>
  );
};

export default ForgotPassword;
