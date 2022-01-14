import { StyleSheet, Dimensions } from 'react-native'
let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  header: {
    position: 'relative',
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1
  },
  heading: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18
  },
  mainScreen: {
    backgroundColor: '#E5E5E5'
  },
  item: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 999,
    resizeMode: 'contain'
  },
  icCaret: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightItem: {
    marginLeft: 16
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  rule: {
    fontSize: 14
  },
  // More Details
  bg: {
    backgroundColor: '#E5E5E5',
    paddingBottom: 50
  },
  mainItem: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  moreDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 11
  },
  moreDetailTitle: {
    fontSize: 14
  },
  iconArrow: {
    width: 16,
    height: 16
  },
  moreDetailVal: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  switchNotice: {
    marginVertical: -15
  },

  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 11
  },
  logoutImg: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  height: {
    height: 75
  }
})
export default styles
