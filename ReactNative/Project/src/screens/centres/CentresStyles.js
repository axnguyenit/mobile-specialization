import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pr20: {
    paddingRight: 20,
  },
  pb50: {
    paddingBottom: 50,
  },
  px15: {
    paddingHorizontal: 15,
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
  module: {
    marginTop: -50,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  totalCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    paddingRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 6,
  },
  imgArea: {
    padding: 10,
    borderRadius: 999,
    marginRight: 10,
  },
  cardImg: {
    width: 16,
    height: 16,
  },
  searchBox: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  inPutSearch: {
    width: '82%',
  },
  filter: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 16,
    borderRadius: 8,
  },
  headingSelect: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#FFF',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default styles;
