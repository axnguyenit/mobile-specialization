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
    subTitle: {
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 16
    },
    postItem: {
        paddingBottom: 20,
    },
    img: {
        width: "100%",
        height: 140,
        resizeMode: "cover"
    },
    heading: {
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: "bold",
        fontSize: 16
    },
    info: {
        marginTop: 8,
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ccc"
    }
});

export default styles;