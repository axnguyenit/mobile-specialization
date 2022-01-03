import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",
    },
    containerFluid: {
        padding: 20,
        backgroundColor: "#e5e5e5"
    },
    title: {
        padding: 20,
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#fff"
    },
    infoControl: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4
    },
    infoDetails: {
        fontWeight: "bold",
    }
});

export default styles;