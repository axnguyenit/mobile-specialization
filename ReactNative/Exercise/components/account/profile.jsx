import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "./profileStyles";

const Profile = () => {
    const auth = useSelector(state => state.auth)
    const { userData } = auth;

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
                    <Text style={styles.infoDetails}>{userData.fullName}</Text>
                </View>
                <View style={styles.infoControl}>
                    <View style={{ width: 100, color: "#838393" }}>
                        <Text>Email</Text>
                    </View>
                    <Text style={styles.infoDetails}>{userData.email}</Text>
                </View>
                <View style={styles.infoControl}>
                    <View style={{ width: 100, color: "#838393" }}>
                        <Text>Employed</Text>
                    </View>
                    <Text style={styles.infoDetails}>{userData.employed}</Text>
                </View>
            </View>
            {/* <View style={{ height: 50 }} /> */}
        </View>
    )
}

export default Profile