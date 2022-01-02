import React, { useState } from "react";
import styles from "./jobsStyles";
import caretDownIcon from "../../assets/images/caret-down.png";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

const JobItem = ({item}) => {
    const [expanded , setExpanded ] = useState(false)
    const [rotateX, setRotateX] = useState("0deg")

    const handleCollapse = () => {
        setExpanded(!expanded)
        rotateX === "0deg" ? setRotateX("180deg") : setRotateX("0deg")
    }

    return (
        <View style={styles.jobItem}>
            <View style={styles.info}>
                <TouchableOpacity style={styles.heading} onPress={handleCollapse}>
                    <View>
                        <Text style={styles.fontBold}>{item.title}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                    <Image style={[
                        styles.caretDownIcon, {
                            transform: [
                                { rotateX: rotateX }
                            ]
                        }]}
                        source={caretDownIcon}
                    />
                </TouchableOpacity>

                <View style={styles.jobName}>
                    <Text style={styles.name}>Job Name:</Text>
                    <Text style={styles.fontBold}>{item.jobName}</Text>
                </View>
            </View>

            {
                expanded && 
                <View>
                    <View style={[styles.flexBox, styles.paddingX15]}>
                        <View>
                            <Text style={styles.name}>Leave Type</Text>
                            <Text style={styles.fontBold}>{item.leaveType}</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>Time Allowance</Text>
                            <Text style={styles.fontBold}>{item.timeAllowance}</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>LAHA</Text>
                            <Text style={styles.fontBold}>{item.laha}</Text>
                        </View>
                    </View>

                    <View style={[styles.paddingX15, { marginTop: 10 }]}>
                        <Text style={styles.name}>Description:</Text>
                        <Text style={styles.fontBold}>{item.desc}</Text>
                    </View>

                    <View style={[styles.paddingX15, { marginTop: 10 }]}>
                        <Text style={styles.name}>Payroll Notes:</Text>
                        <Text style={styles.fontBold}>{item.payrollNotes}</Text>
                    </View>

                    <View style={[styles.paddingX15, { marginTop: 10, marginBottom: 15 }, styles.flexBox]}>
                        <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
                            <Text style={{ color: "#fff" }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default JobItem