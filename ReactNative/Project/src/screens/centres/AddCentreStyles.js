import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mb20: {
    marginBottom: 20,
  },
  bgWhite: {
    backgroundColor: '#FFF',
  },
  container: {
    padding: 15,
  },
  warning: {
    color: '#E24C3F',
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    color: '#2D1F21',
    zIndex: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#999',
  },
  inputAndroid: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#999',
  },
});

export { pickerSelectStyles };

export default styles;
