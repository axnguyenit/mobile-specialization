import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  cardContent: {
    padding: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginVertical: 4,
  },
  heading: {
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kindi: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    textTransform: 'capitalize',
  },
  w60: {
    width: '60%',
  },
});

export default styles;
