import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { auth } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import styles from './styles'
import success from '../../assets/images/success.png'
import Icon, { Icons } from '../../components/icons'
import { Input } from '../../components/input'
import Button from '../../components/button'

function Login(props) {
  const [showPassword, setShowPassword] = useState(true)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigation = useNavigation()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user
        if (user) navigation.navigate('Home')
      })
      .catch((error) => console.log('[LOGIN ERROR] => ', error.massage))
  }

  const handleOnChange = (text, name) => {
    setUser({ ...user, [name]: text })
    // setErr("")
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigation.navigate('Home')
    })
    return unsubscribe
  }, [])

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

            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.forgotPass}>
                <Text>Forgot password ?</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Button
                color="#fff"
                bg="#DB147F"
                label="Login"
                onPress={handleLogin}
              />
            </View>
            <View style={styles.btnRegister}>
              <Button
                color="#fff"
                bg="#7B61FF"
                label="Register"
                onPress={() => {
                  navigation.navigate('Register')
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.contact}>
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
export default Login
