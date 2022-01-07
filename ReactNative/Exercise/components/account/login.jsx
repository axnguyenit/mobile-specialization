import React, { useState } from "react";
import global from '../../assets/images/global.png';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from "react-native";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../redux/actions/auth";
import { useNavigation } from "@react-navigation/native";
import users from "../../fake-db/users"
import styles from "./loginStyles";

const Login = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [err, setErr] = useState('')
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onChange = (text, name) => {
        setUser({ ...user, [name]: text })
        setErr("")
    }

    const handleDispatch = (validUser) => {
        const { email, employed, fullName } = validUser
        dispatch(handleLogin({
            email,
            employed,
            fullName
        }))
        navigation.navigate("User")
    }

    const onSubmit = () => {
        const validUser = users.find(u => u.email === user.email && u.password === user.password)
        validUser ? handleDispatch(validUser) : setErr("Email or Password is invalid!")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgContent}>
                <Image 
                    style={styles.globalImg}
                    source={global}
                />

                <Text style={styles.baseText}>LinkedSite</Text>
            </View>

            <View>
                <Text>
                    Acciona Account Users (eg.@acciona, @colemanrail etc.)  Sign in with your corporate ID
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.btnLoginPri}
                >
                    <Text style={{ 
                        color: "#fff",
                        fontSize: 16
                     }}>
                        AccionaCorporateLogin
                    </Text>
                </TouchableOpacity>
            </View>

            <View >
                <Text style={styles.desc}>
                    All Other Users / Use the login form below
                </Text>
            </View>

            <View style={styles.formLogin}>
                <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChange(text, "email")}
                        placeholder="Email address"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChange(text, "password")}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <Text style={{ color: "#D00C04", fontWeight: "bold" }}>{err}</Text>
                </View>

                <View style={styles.forgotPass}>
                    <Text>
                        Forgot your password?
                    </Text>
                </View>
                
                <View>
                    <TouchableOpacity
                        style={styles.btnSub}
                        onPress={onSubmit}
                    >
                        <Text style={{ 
                            color: "#fff",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoDetails}>Forgot your password or having trouble signing in?</Text>
                <Text style={styles.infoDetails}>
                    Contact the Service Desk on:&nbsp;
                    <Text style={{
                        color: "#e00000", 
                        fontWeight: "bold"
                    }}>
                        (+84) 337 965 469
                    </Text>
                </Text>
                <Text style={styles.infoDetails}>Raise an incident via <Text style={{
                        color: "#e00000", 
                        fontWeight: "bold"}}
                    >
                        Service Now Portal
                    </Text>
                </Text>
            </View>
        </ScrollView>
    )
}

export default Login;