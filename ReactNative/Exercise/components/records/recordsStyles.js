import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginBottom: 37,
        backgroundColor: "#fff",
    },
    heading: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    tbnAdd: {
        position: "absolute",
        right: 20,
    },
    mainView: {
        backgroundColor: "#e5e5e5",
        paddingTop: 6,
        paddingHorizontal: 20
    },
    recordItem: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 4,
        borderColor: "#ccc",
        borderWidth: 1,
        marginVertical: 6,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recordRight: {
        textAlign: "right"
    },
    recordNo: {
        fontSize: 18,
        fontWeight: "bold",
    },
    status: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 6,
    },
    warning: {
        color: "#ffa500"
    },
    date: {
        color: "#808092"
    },
    detailsNo: {
        color: "#D00C04"
    },
    font13: {
        fontSize: 13
    },
    goBack: {
        position: "absolute",
        left: 20,
    },
    detailsItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 8,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4
    },
    label: {
        width: 120,
    },
    labelText: {
        color: "#838393",
        fontWeight: "bold",
    },
    labelContent: {
        flex: 1,
        flexWrap: "wrap",
        fontWeight: "bold",
    },
    recordDetailsHeading: {
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 10,
    },
    // record details
    recordDetails: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 15
    },
    recordDetailsGrid: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recordDetailsItem: {
        width: "48%"
    },
    recordDetailsLabel: {
        fontWeight: "bold",
        marginVertical: 10
    },
    recordDetailsContent: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 10
    },
    // add record
    inputLabel: {
        marginTop: 8,
        marginBottom: 4,
        fontWeight: "bold",
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 15,
        backgroundColor: "#fff"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    formControl: {
        width: "48%",
    },

    btnGroup: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        justifyContent: "center"
    },
    btnAdd: {
        backgroundColor: "#7367f0",
        width: "48%",
    },
    btnCancel: {
        backgroundColor: "#D00C04",
        width: "48%",
    },
    warning: {
        color: "#D00C04"
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 15,
        backgroundColor: "#fff",
        color: "#999",
    },
    inputAndroid: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 15,
        backgroundColor: "#fff",
        color: "#999",
    },
});

export { pickerSelectStyles }

export default styles;