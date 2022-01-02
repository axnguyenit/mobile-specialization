import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        marginBottom: 37,
        backgroundColor: "#e5e5e5",
    },
    heading: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff"
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
        marginBottom: 8,
        fontWeight: "bold"
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        padding: 12,
        fontSize: 15
    },
});

export default styles;