import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./recordsStyles";
import records from "../../fake-db/records/records";

const RecordDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [recordDetails, setRecordDetails] = useState({});

    const fetchRecordDetails = () => {
        const record = records.find(record => record.id === route.params.id);
        record && setRecordDetails(record);
    }

    useEffect(() => {
        route.params && fetchRecordDetails()
    }, [route.params.id])

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
                <Text style={styles.title}>SOR Quantity Record</Text>
            </View>
            <ScrollView style={styles.mainView}>
                {
                    recordDetails && <View>
                        <View>
                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>SOR Quantity Record No</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.no}</Text>
                            </View>

                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>SOR Quantity Record Status</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.status}</Text>
                            </View>
                            
                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>Job</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.job}</Text>
                            </View>

                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>Foreman</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.foreman}</Text>
                            </View>

                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>Engineer</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.engineer}</Text>
                            </View>

                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>Location</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.location}</Text>
                            </View>

                            <View style={styles.detailsItem}>
                                <View style={styles.label}>
                                    <Text style={styles.labelText}>Total Effort</Text>
                                </View>
                                <Text style={styles.labelContent}>{recordDetails.totalEffort}</Text>
                            </View>
                        </View>

                        {
                            recordDetails.details && <View >
                            <Text style={styles.recordDetailsHeading}>Pay Item Details</Text>

                            <View style={styles.recordDetails}>
                                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{recordDetails.details.no}</Text>

                                <View style={styles.recordDetailsGrid}>
                                    <View style={styles.recordDetailsItem}>
                                        <Text style={styles.recordDetailsLabel}>UoM</Text>
                                        <Text style={styles.recordDetailsContent}>{recordDetails.details.uom}</Text>
                                    </View>
                                    <View style={styles.recordDetailsItem}>
                                        <Text style={styles.recordDetailsLabel}>Rate</Text>
                                        <Text style={styles.recordDetailsContent}>${recordDetails.details.rate.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <View style={styles.recordDetailsGrid}>
                                    <View style={styles.recordDetailsItem}>
                                        <Text style={styles.recordDetailsLabel}>Quantity *</Text>
                                        <Text style={styles.recordDetailsContent}>{recordDetails.details.quantity}</Text>
                                    </View>
                                    <View style={styles.recordDetailsItem}>
                                        <Text style={styles.recordDetailsLabel}>Proposed Value</Text>
                                        <Text style={styles.recordDetailsContent}>${(recordDetails.details.rate * recordDetails.details.quantity).toFixed(2)}</Text>
                                    </View>
                                </View>

                                <View>
                                    <Text style={styles.recordDetailsLabel}>Comments *</Text>
                                    <Text style={styles.recordDetailsContent}>
                                        {recordDetails.details.comments
                                         && recordDetails.details.comments.map(comment => <Text key={comment.id}>{comment.comment} &nbsp;</Text>)}
                                    </Text>    
                                </View>
                            </View>
                        </View>
                        }
                    </View>
                }
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecordDetails