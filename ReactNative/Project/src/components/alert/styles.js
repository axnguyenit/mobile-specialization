import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: '90%',
    padding: 24,
  },
  heading: {
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.8,
    fontWeight: 'bold',
    color: '#171725',
    marginBottom: 10,
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#696974',
    marginVertical: 2,
  },
  button: {
    width: '100%',
    marginTop: 24,
  },
});

export default styles;
