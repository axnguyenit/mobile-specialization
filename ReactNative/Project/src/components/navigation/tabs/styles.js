import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBar: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 4
  },
  btn: {
    // width: 50,
    // height: 50,
    // borderRadius: 25,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // circle: {
  //     ...StyleSheet.absoluteFillObject,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: "#D00C04",
  //     borderRadius: 25,
  // },
  text: {
    fontSize: 12,
    textAlign: 'center'
    // color: "#ACB2B8",
  },
  img: {
    width: 24,
    height: 24
  }
})

export default styles
