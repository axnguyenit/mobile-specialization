import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  formControl: {
    borderColor: '#D3CCCC',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    color: '#2D1F21',
  },

  // Input Search
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: '100%',
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    width: '100%',
  },
});

export default styles;
