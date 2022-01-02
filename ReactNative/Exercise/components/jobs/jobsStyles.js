import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    containerFluid: {
        padding: 20,
        backgroundColor: "#e5e5e5"
    },
    title: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    milestone: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    arrow: {
        width: 20,
        height: 20,
    },
    jobItem: {
        backgroundColor: "#fff",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
    },
    info: {},
    heading: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    time: {
        fontSize: 13
    },
    caretDownIcon: {
        width: 16,
        height: 8,

    },
    jobName: {
        padding: 15,
    },
    name: {
        color: "#838393",
        fontSize: 13
    },
    fontBold: {
        fontWeight: "bold"
    },
    flexBox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    paddingX15: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    btn: {
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        width: "48%",
        alignItems: "center"
    },
    btnPrimary: {
        backgroundColor: "#D00C04",
    },
    btnSecondary: {
        borderColor: "#838393",
        borderWidth: 1
    }
});

export default styles;