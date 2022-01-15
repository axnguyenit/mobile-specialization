import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  viewMarketingInfo: {
    padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  descMarketingInfo: {
    fontSize: 15,
    color: '#2D1F21',
    lineHeight: 24,
    marginTop: 8,
  },
  header: {
    position: 'relative',
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F1F1F5',
    borderBottomWidth: 1,
  },
  heading: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeMarketingInfo: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 5,
  },
  // Select Centre
  viewSelectCentre: {
    padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    height: height - 150,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  closeSelectCentre: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
  },
  imgSelectCentre: {
    width: 36,
    height: 36,
    borderRadius: 999,
    resizeMode: 'contain',
    marginRight: 15,
  },
  centres: {
    marginTop: 15,
  },
  centreItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  circle: {
    borderRadius: 999,
    borderWidth: 2,
    width: 16,
    height: 16,
    position: 'absolute',
    right: 10,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideCircle: {
    borderRadius: 999,
    width: 10,
    height: 10,
  },
});

export default styles;
