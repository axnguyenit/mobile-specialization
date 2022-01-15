import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  serviceItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  serviceImgArea: {
    width: 42,
    height: 42,
    marginRight: 10,
    padding: 10,
    borderRadius: 999,
    backgroundColor: '#FFF0FB',
  },
  serviceImg: {
    width: 22,
    height: 22,
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  serviceMonths: {
    marginVertical: 5,
  },
  servicePrice: {
    flexDirection: 'row',
  },
});

export default styles;
