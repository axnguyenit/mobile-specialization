import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        padding: 20,
        alignItems: "center"
    },
    logo: {
        flexDirection: "row",
        alignItems: "center"
    },

    logoImg: {
        height: 48,
        width: 32
    },
    logoText: {
        color: '#000',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: -10,
        fontWeight: "bold"
    },
    logoBio: {
        color: '#000',
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: -25,
        marginLeft: -35,
    }
});

export default styles;