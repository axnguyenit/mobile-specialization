import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lh20: {
    lineHeight: 20,
  },
  container: {
    backgroundColor: '#E5E5E5',
  },
  scene: {
    height: 555,
  },
  tabBar: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 12,
  },
  tabText: {
    color: '#DB147F',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tabView: {
    paddingHorizontal: 15,
  },
  tabServiceItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  tabServiceImgArea: {
    width: 42,
    height: 42,
    marginRight: 10,
    padding: 10,
    borderRadius: 999,
    backgroundColor: '#FFF0FB',
  },
  tabServiceImg: {
    width: 22,
    height: 22,
  },
  tabServiceTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tabServiceMonths: {
    marginVertical: 5,
  },
  tabServicePrice: {
    flexDirection: 'row',
  },
  tabViewContent: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 10,
  },
  // Centre Information
  infoTitle: {
    fontWeight: 'bold',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginBottom: 15,
  },
  infoName: {
    color: '#2D1F21',
    width: 100,
  },
  infoDetails: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  // summary
  summaryCollapse: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryHeading: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
  },
  summaryName: {
    width: '57%',
    marginRight: 12,
  },
  summaryImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: 'cover',
  },
  summaryIconCollapse: {
    width: 24,
    height: 24,
  },
  summaryExpanded: {
    borderTopColor: '#F2F0F0',
    borderTopWidth: 1,
    borderBottomColor: '#F2F0F0',
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 20,
    paddingRight: 16,
    paddingBottom: 12,
    marginBottom: 20,
  },
  summaryGeneral: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  summaryGeneralIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  summaryType: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    textTransform: 'capitalize',
  },
  summaryGeneralText: {
    fontSize: 16,
    color: '#171725',
  },
  summaryEnquiryIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  summaryEnquiryText: {
    fontSize: 14,
    color: '#2D1F21',
  },
  summaryEnquiry: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryCentre: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  summaryStatus: {
    color: '#36BF57',
  },
  border: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  // Features
  features: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 16,
  },
  marketing: {
    paddingHorizontal: 16,
  },
  addService: {
    backgroundColor: '#DB147F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  white: {
    color: '#FFF',
  },
});

export default styles;
