import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        padding: 12,
        fontSize: 15
    },
    formLogin: {
        flexDirection: "column"
    },
    imgContent: {
        justifyContent: "center",
        alignItems: "center"
    },
    globalImg: {
        height: 70,
        width: 70,
        marginTop: 10,
        marginBottom: 10,
    },
    baseText: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 20
    },
    btnLoginPri: {
        marginTop: 15,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#e00000",
        alignItems: "center",
        borderRadius: 4,
    },
    desc: {
        marginTop: 15,
        marginBottom: 15,
    },
    inputLabel: {
        marginTop: 8,
        marginBottom: 8,
        fontWeight: "bold"
    },
    forgotPass: {
        marginTop: 8,
        alignItems: "flex-end"
    },
    btnSub: {
        marginTop: 15,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        borderRadius: 4,
        backgroundColor: "#141434",
    },
    info: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;