import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  btn: {
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
});

export default styles;
