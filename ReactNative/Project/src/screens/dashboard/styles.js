import { StyleSheet, Dimensions, StatusBar } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  centreName: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#FFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  cardScroll: {
    marginTop: -35,
    paddingHorizontal: 8,
  },
  cards: {
    paddingBottom: 50,
    marginHorizontal: 8,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    paddingBottom: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 16,
  },
  cardHeading: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 16,
  },
  cardImg: {
    width: 40,
    height: 40,
    marginRight: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centreTitle: {
    width: '60%',
    fontSize: 16,
    paddingVertical: 10,
    color: '#2D1F21',
  },
  centreVal: {
    color: '#2D1F21',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContent: {
    paddingTop: 5,
  },
});

export default styles;
