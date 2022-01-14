import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { auth } from '../../firebase/config'
import success from '../../assets/images/success.png'
import Icon, { Icons } from '../../components/icons'
import { Input } from '../../components/input'
import Button from '../../components/button'

function Register(props) {
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const [err, setErr] = useState(null)
  const navigation = useNavigation()
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleRegister = () => {
    if (user.password === user.confirmPassword) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          console.log('[REGISTER ERROR] => ', error.message)
          setErr(error.message)
        })
    } else {
      setErr('Confirm password not match. Try again!')
    }
  }

  const handleOnChange = (text, name) => {
    setUser({ ...user, [name]: text })
    console.log(user)
    setErr(null)
  }

  return (
    <View style={styles.flex1}>
      <View style={styles.container}>
        <View>
          <View style={styles.success}>
            <Image source={success} style={styles.successImg} />
          </View>

          <View>
            <View>
              <Input
                onChangeText={(text) => handleOnChange(text, 'email')}
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Input
                onChangeText={(text) => handleOnChange(text, 'password')}
                secureTextEntry={showPassword}
                label="Password"
                placeholder="Enter your password"
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  type={Icons.Ionicons}
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  color="#5C595A"
                  size={20}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
              <Input
                onChangeText={(text) => handleOnChange(text, 'confirmPassword')}
                secureTextEntry={showPassword2}
                label="Confirm Password"
                placeholder="Confirm your password"
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setShowPassword2(!showPassword2)}
              >
                <Icon
                  type={Icons.Ionicons}
                  name={showPassword2 ? 'eye-outline' : 'eye-off-outline'}
                  color="#5C595A"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {err && (
              <View>
                <Text style={styles.warning}>{err}</Text>
              </View>
            )}

            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.forgotPass}>
                <Text>Forgot password ?</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Button
                color="#fff"
                bg="#7B61FF"
                label="Register"
                onPress={handleRegister}
              />
            </View>
            <View style={styles.btnRegister}>
              <Button
                color="#fff"
                bg="#DB147F"
                label="Login"
                onPress={() => {
                  navigation.navigate('Login')
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.contact1}>
          <Text style={{ textAlign: 'center' }}>
            <Text>If you have trouble logging in to KindiCare CRM, </Text>
            <TouchableOpacity>
              <Text
                style={{
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
  )
}

export default Register
