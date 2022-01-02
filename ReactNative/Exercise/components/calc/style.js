import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultText: {
        fontSize: 36,
        color: "#aaa",
    },
    calculationText: {
        fontSize: 44,
        color: "#444"
    },
    number: {
        width: "100%",
        fontSize: 30,
        color: "white",
        padding: 12
    },
    calculation: {
        height: "30%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        fontSize: 30,
        padding: 16
    },
    buttons: {
        backgroundColor: "#ccc",
        width: "100%",
        height: "70%",
        flexDirection: "row",
    },
    numbers: {
        width: "80%",
        backgroundColor: "#434343",
        justifyContent: "space-around",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    operations: {
        width: "20%",
        backgroundColor: "#636363",
        alignItems: "center",
        justifyContent: "space-around",
    },
    operationButton: {
        fontSize: 20,
        color: "white",
    },
});

export default styles;