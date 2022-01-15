import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 16,
  },
  featureTitle: {
    width: '70%',
    color: '#2D1F21',
    fontSize: 14,
  },
});

export default styles;
