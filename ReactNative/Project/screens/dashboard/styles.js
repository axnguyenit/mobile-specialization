import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: 15,
    },
    header: {
        backgroundColor: '#DB147F',
        paddingVertical: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    headerImg: {
        width: 22,
        height: 22,
    },
    cards: {
        marginTop: -50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 180,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 6
    },
    cardHeading: {
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        paddingBottom: 10
    },
    cardImg: {
        width: 36,
        height: 36,
        marginRight: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardNo: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles;