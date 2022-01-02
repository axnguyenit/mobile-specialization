import React from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import styles from "./recordsStyles";

const AddRecord = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity
                    style={styles.goBack}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign
                        name="arrowleft"
                        size={24}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Add Record</Text>
            </View>
            <ScrollView style={styles.mainView}>
                <View>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            placeholder="Email address"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            placeholder="Password"
                            keyboardType="visible-password"
                        />
                    </View>
                </View>
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddRecord