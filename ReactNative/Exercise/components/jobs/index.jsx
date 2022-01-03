import React from "react";
import styles from "./jobsStyles";
import JobItem from "./jobItem";
import arrowRight from "../../assets/images/arrow-right.png"
import arrowLeft from "../../assets/images/arrow-left.png"

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";

const arr = [
    {
        id: 1,
        title: "Thu 05 Nov (Total: 1h 40m)",
        time: "02:15pm to 04:10pm - 15m lunch",
        jobName: "835-853 High St, Armadale OH - Overheads",
        leaveType: "N/A",
        timeAllowance: "N/A",
        laha: "N/A",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos mollitia libero voluptatum, inventore sunt. Voluptatibus vitae officia alias.",
        payrollNotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Fri 06 Nov (Total: 2h 10m)",
        time: "02: 30pm to 04:10pm - 15m lunch",
        jobName: "835-853 High St, Armadale (11466) OH - Overheads",
        leaveType: "N/A",
        timeAllowance: "N/A",
        laha: "N/A",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos mollitia libero voluptatum, inventore sunt. Voluptatibus vitae officia alias.",
        payrollNotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Fri 06 Nov (Total: 2h 10m)",
        time: "02: 30pm to 04:10pm - 15m lunch",
        jobName: "835-853 High St, Armadale (11466) OH - Overheads",
        leaveType: "N/A",
        timeAllowance: "N/A",
        laha: "N/A",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dignissimos mollitia libero voluptatum, inventore sunt. Voluptatibus vitae officia alias.",
        payrollNotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
]

const Jobs = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>FlatList And ScrollView</Text>
            </View>
            <ScrollView style={styles.containerFluid}>
                <View style={styles.milestone}>
                    <TouchableOpacity>
                        <Image style={styles.arrow} source={arrowLeft} />
                    </TouchableOpacity>

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>
                            Mon 02 Nov - Sun 08 Nov 2020
                        </Text>
                        <Text style={{ color: "#888"  }}>
                            (3h 20m)
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Image style={styles.arrow} source={arrowRight} />
                    </TouchableOpacity>
                </View>

                <View>
                    {
                        arr && arr.map(item => <JobItem key={item.id} item={item}/>)
                    }
                </View>
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    )
}

export default Jobs