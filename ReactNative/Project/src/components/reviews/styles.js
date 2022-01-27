import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  reviewHeaderImg: {
    width: 32,
    height: 32,
    marginRight: 23,
    marginLeft: 6,
    resizeMode: 'contain',
  },
  reviewHeaderTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    color: '#2D1F21',
  },
  reviewExpanded: {
    paddingBottom: 0,
  },
  // reviewItem
  reviewItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingTop: 16,
    borderTopColor: '#F2F2F2',
    borderTopWidth: 1,
  },
  reviewItemAvatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 999,
    marginRight: 12,
  },
  reviewItemAvatarChar: {
    width: 40,
    height: 40,
    borderRadius: 999,
    marginRight: 12,
    backgroundColor: '#DB147F',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
  },
  reviewItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D1F21',
  },
  reviewItemStar: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  reviewItemCircle: {
    width: 4,
    height: 4,
    borderRadius: 8,
    backgroundColor: '#ACB2B8',
    marginHorizontal: 12,
  },
  reviewItemMessage: {
    marginBottom: 12,
  },
  reviewItemFrom: {
    marginRight: 12,
    fontSize: 10,
    fontWeight: 'bold',
  },
  reviewItemDate: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#857E7F',
  },
});

export default styles;
