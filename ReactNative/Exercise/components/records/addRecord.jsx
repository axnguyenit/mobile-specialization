import React, { useState } from "react";
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
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from "react-redux";
import { addRecord } from "../../redux/actions/record";
import styles, { pickerSelectStyles } from "./recordsStyles";

const AddRecord = () => {
    const navigation = useNavigation();
    const [record, setRecord] = useState({
        no: 0,
        status: "",
        date: "",
        job: "",
        foreman: "",
        engineer: "",
        location: "",
        totalEffort: "",
        detailsNo: 0,
        uom: "",
        rate: 0,
        quantity: 0,
        comment: ""
        
    })
    const [errorText, setErrorText] = useState({
        no: "",
        status: "",
        date: "",
        job: "",
        foreman: "",
        engineer: "",
        location: "",
        totalEffort: "",
        detailsNo: "",
        uom: "",
        rate: "",
        quantity: "",
        comment: ""
        
    })
    const dispatch = useDispatch()

    const onChange = (text, name) => {
        setRecord({ ...record, [name]: text })
    }

    const handleDispatch = () => {
        const rand = Math.floor(Math.random() * (999999 - 300) + 300);
        const newObj = {
            id: rand,
            no: record.no,
            status: record.status,
            date: record.date,
            job: record.job,
            foreman: record.foreman,
            engineer: record.engineer,
            location: record.location,
            totalEffort: record.totalEffort,
            details: {
                no: record.detailsNo,
                uom: record.uom,
                rate: record.rate,
                quantity: record.quantity,
                comments: [{
                    id: 1,
                    comment: record.comment
                }, ]
            }
        }
        dispatch(addRecord(newObj))
        setRecord({
            no: 0,
            status: "",
            date: "",
            job: "",
            foreman: "",
            engineer: "",
            location: "",
            totalEffort: "",
            detailsNo: 0,
            uom: "",
            rate: 0,
            quantity: 0,
            comment: ""
            
        })
        navigation.navigate("Home")
    }

    const handleAddRecord = () => {
        const keys = Object.keys(record)
        keys.map(key => {
            record[key] ? setErrorText(prevState => ({ ...prevState, [key]: ""}))
            : setErrorText(prevState => ({ ...prevState, [key]: "Fill in this filed!"}))
        })

        const values = Object.values(errorText)
        const isEmpty = (currentValue) => currentValue === "";
        const result = values.every(isEmpty);

        result && handleDispatch()
    }

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
                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>No</Text>
                        <TextInput
                            style={styles.input}
                            value={record.no}
                            onChangeText={text => onChange(text, "no")}
                            placeholder="No"
                            keyboardType="numeric"
                        />
                        <Text style={styles.warning}>{errorText.no}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Status</Text>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: "Select status", value: null }}
                            onValueChange={value => onChange(value, "status")}
                            items={[
                                { label: 'Submitted', value: 'Submitted' },
                                { label: 'Draft', value: 'Draft' },
                                { label: 'Canceled', value: 'Canceled' },
                            ]}
                        />
                        <Text style={styles.warning}>{errorText.status}</Text>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Date</Text>
                        <DatePicker
                            style={{
                                borderColor: "#ccc",
                                borderWidth: 1,
                                borderRadius: 3,
                                width: "100%",
                                backgroundColor: "#fff"
                            }}
                            mode="date"
                            placeholder="Select date"
                            format="DD-MM-YYYY"
                            date={record.date}
                            minDate={new Date()}
                            //   maxDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                placeholderText: {
                                    color: "#999",
                                    fontSize: 15
                                },
                                dateInput: {
                                    position: 'absolute',
                                    left: 0,
                                    marginLeft: 10,
                                    borderWidth: 0,
                                    backgroundColor: "#fff"
                                },
                            }}
                              onDateChange={date => onChange(date, "date")}
                            // getDateStr
                        />
                        <Text style={styles.warning}>{errorText.date}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Job</Text>
                        <TextInput
                            style={styles.input}
                            value={record.job}
                            onChangeText={text => onChange(text, "job")}
                            placeholder="Job"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.job}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Foreman</Text>
                        <TextInput
                            style={styles.input}
                            value={record.foreman}
                            onChangeText={text => onChange(text, "foreman")}
                            placeholder="Foreman"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.foreman}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Engineer</Text>
                        <TextInput
                            style={styles.input}
                            value={record.engineer}
                            onChangeText={text => onChange(text, "engineer")}
                            placeholder="Engineer"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.engineer}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Location</Text>
                        <TextInput
                            style={styles.input}
                            value={record.location}
                            onChangeText={text => onChange(text, "location")}
                            placeholder="Location"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.location}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Total Effort</Text>
                        <TextInput
                            style={styles.input}
                            value={record.totalEffort}
                            onChangeText={text => onChange(text, "totalEffort")}
                            placeholder="Total Effort"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.totalEffort}</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 15 }}>Record Details</Text>

                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>No</Text>
                        <TextInput
                            style={styles.input}
                            value={record.detailsNo}
                            onChangeText={text => onChange(text, "detailsNo")}
                            placeholder="No"
                            keyboardType="numeric"
                        />
                        <Text style={styles.warning}>{errorText.detailsNo}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>UoM</Text>
                        <TextInput
                            style={styles.input}
                            value={record.uom}
                            onChangeText={text => onChange(text, "uom")}
                            placeholder="eg: kilogram"
                            keyboardType="default"
                        />
                        <Text style={styles.warning}>{errorText.uom}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Rate</Text>
                        <TextInput
                            style={styles.input}
                            value={record.rate}
                            onChangeText={text => onChange(text, "rate")}
                            placeholder="Rate"
                            keyboardType="numeric"
                        />
                        <Text style={styles.warning}>{errorText.rate}</Text>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={styles.inputLabel}>Quantity</Text>
                        <TextInput
                            style={styles.input}
                            value={record.quantity}
                            onChangeText={text => onChange(text, "quantity")}
                            placeholder="Quantity"
                            keyboardType="numeric"
                        />
                        <Text style={styles.warning}>{errorText.quantity}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.inputLabel}>Comment</Text>
                    <TextInput
                        style={styles.input}
                        value={record.comment}
                        onChangeText={text => onChange(text, "comment")}
                        placeholder="Comment"
                        keyboardType="default"
                    />
                    <Text style={styles.warning}>{errorText.comment}</Text>
                </View>

                <View style={styles.btnGroup}>
                    <TouchableOpacity style={[styles.btn, styles.btnCancel]}>
                        <Text style={{ color: "#fff", textAlign: "center" }}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn, styles.btnAdd]}
                        onPress={handleAddRecord}
                    >
                        <Text style={{ color: "#fff", textAlign: "center" }}>Add</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddRecord