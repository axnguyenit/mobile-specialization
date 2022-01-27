import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  photos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: (width - 4 * 70 - 64) / 3,
  },
  photo1: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  photoMore: {
    position: 'relative',
  },
  photoLayout: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    color: '#FFF',
    fontSize: 16,
    paddingVertical: 25,
    textAlign: 'center',
  },
});

export default styles;
