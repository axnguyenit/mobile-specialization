import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  summaryLabel: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  summaryIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  summaryText: {
    fontSize: 14,
    color: '#2D1F21',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
