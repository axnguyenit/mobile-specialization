import { StyleSheet, Dimensions, StatusBar } from 'react-native';
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
        backgroundColor: '#E5E5E5'
    },
    mainView: {},
    scene: {
        height: 555
    },
    tabBar: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    tabItem: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 8,
    },
    tabText: {
        color: '#DB147F',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    tabView: {
        paddingHorizontal: 15
    },
    tabServiceItem: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        flexDirection: 'row',
    },
    tabServiceImgArea: {
        width: 42,
        height: 42,
        marginRight: 10,
        padding: 10,
        borderRadius: 999,
        backgroundColor: '#FFF0FB',
    },
    tabServiceImg: {
        width: 22,
        height: 22
    },
    tabServiceTitle: {
        fontWeight: 'bold',
    },
    tabServiceMonths: {
        marginVertical: 5
    },
    // Centre Information
    infoItem: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 10
    },
    infoTitle: {
        fontWeight: 'bold',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        marginBottom: 15,
    },
    infoName: {
        color: '#2D1F21',
        width: 100,
    },
    infoDetails: {
        flexDirection: 'row',
        paddingVertical: 4,
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default styles;