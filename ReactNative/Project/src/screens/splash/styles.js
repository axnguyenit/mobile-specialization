import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default styles;
