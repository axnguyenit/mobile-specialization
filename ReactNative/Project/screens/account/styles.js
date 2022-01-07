import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 15,
    },
    success: {
        marginTop: 80,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successImg: {
        width: 80,
        height: 80
    },
    passwordIcon: {
        position: 'absolute',
        right: 12,
        top: '25%',
    },
    forgotPass: {
        alignItems: 'flex-end',
        width: 120,
        marginVertical: 15,
    },

    contact: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: height - 450
    },
    goBack: {
        marginTop: 40,
        marginBottom: 20,
        // borderColor: '#ccc',
        // borderWidth: 1,
        width: 28,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles;