import React from "react";
import { View, Text } from "react-native";

import styles from "./profileStyles";

const Profile = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.containerFluid}>
                <View style={styles.infoControl}>
                    <View style={{ width: 100, color: "#838393" }}>
                        <Text>Name</Text>
                    </View>
                    <Text style={styles.infoDetails}>Kha NGUYEN DINH</Text>
                </View>
                <View style={styles.infoControl}>
                    <View style={{ width: 100, color: "#838393" }}>
                        <Text>Email</Text>
                    </View>
                    <Text style={styles.infoDetails}>kha.nguyen01.it@gmail.com</Text>
                </View>
                <View style={styles.infoControl}>
                    <View style={{ width: 100, color: "#838393" }}>
                        <Text>Employed</Text>
                    </View>
                    <Text style={styles.infoDetails}>Front End Developer</Text>
                </View>
            </View>
            {/* <View style={{ height: 50 }} /> */}
        </View>
    )
}

export default Profile