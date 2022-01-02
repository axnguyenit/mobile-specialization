import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    containerFluid: {
        padding: 20,
    },
    title: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "#fff",
        textAlign: "center"
    },
    infoControl: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#E8E8EB",
        borderRadius: 4
    },
    infoDetails: {
        fontWeight: "bold",
    }
});

export default styles;