import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  marketingItem: {
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marketingItemHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  marketingItemTitle: {
    color: '#2D1F21',
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketingItemIconInfo: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginLeft: 4,
  },
  marketingItemDesc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketingItemPrice: {
    color: '#2D1F21',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});

export default styles;
