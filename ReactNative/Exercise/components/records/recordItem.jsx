import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import styles from "./recordsStyles";

const RecordItem = ({record}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.recordItem}
            onPress={() => navigation.navigate('RecordDetails', {
                id: record.id
            })}
        >
            <View style={styles.recordLeft}>
                <Text style={styles.recordNo}>{record.no}</Text>
                <Text style={styles.font13}>SOR Quantity Record</Text>
                <Text style={styles.font13}>Pay Item</Text>
            </View>

            <View style={styles.recordRight}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                    {
                        record.status === "Draft" && <Ionicons
                            name="warning"
                            size={20}
                            style={styles.warning}
                        />
                    }
                    <Text style={[styles.recordRight, styles.status, { color: record.status === "Draft" ? "#361ca4" : "#000" }]}>{record.status}</Text>
                </View>
                <Text style={[styles.recordRight, styles.date, styles.font13]}>{record.date}</Text>
                <Text style={[styles.recordRight, styles.detailsNo, styles.font13]}>{record.details.no}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecordItem