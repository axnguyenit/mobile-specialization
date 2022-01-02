import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        left: 10,
        borderRadius: 4,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: "#fff",
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D00C04",
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: "#D00C04",
    }
})

export default styles;