import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F2F0F0',
    borderBottomWidth: 1,
  },
  back: {
    position: 'absolute',
    top: 42,
    left: 15,
    zIndex: 5,
  },
  heading: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
