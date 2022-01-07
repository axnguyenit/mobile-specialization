import React from "react";
import { useSelector } from 'react-redux'
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import styles from "./recordsStyles";
import RecordItem from "./recordItem";
// import records from '../../fake-db/records';

const Records = () => {
    const records = useSelector(state => state.record)
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>My Records</Text>
                <TouchableOpacity
                    style={styles.tbnAdd}
                    onPress={() => navigation.navigate("AddRecord")}
                >
                    <Entypo
                        name="add-to-list"
                        size={24}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.mainView}>
                <View>
                    {
                        records && records.map(record => <RecordItem key={record.id} record={record} />)
                    }
                </View>
                <View style={{ height: 120 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Records