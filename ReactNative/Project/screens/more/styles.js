/** @format */

import { StyleSheet, Dimensions } from "react-native"
let screenWidth = Dimensions.get("window").width
let screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: screenWidth,
    height: screenHeight
  },
  header: {
    position: "relative",
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 2
  },
  heading: {
    textAlign: "center",
    width: "100%",
    fontWeight: "bold",
    fontSize: 18
  },
  mainScreen: {
    backgroundColor: "#E5E5E5",
    height: screenHeight
  },
  item: {
    width: screenWidth,
    height: 90,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  image: {
    width: 60,
    height: 60
  },
  image2: {
    width: 40,
    height: 40,
    marginLeft: 110
  },
  rightItem: {
    marginLeft: 15
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  rule: {
    fontSize: 16
  },
  mainScreenItem: {
    backgroundColor: "#E5E5E5",
    height: "auto"
  },
  mainItem: {
    width: screenWidth,
    height: 180,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center"
  },
  line1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  titleLine1: {
    fontSize: 16
  },
  iconLine1: {
    width: 28,
    height: 28,
    marginLeft: 278
  },
  line2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  titleLine2: {
    fontSize: 16
  },
  title2Line2: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 249
  },
  line3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  titleLine3: {
    fontSize: 16
  },
  title3Line3: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 250
  },
  line4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  titleLine4: {
    fontSize: 16
  },
  title4Line4: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 208
  },
  bottomItem: {
    width: screenWidth,
    height: "auto",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    marginTop: 8
  },
  bottomLine1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle1: {
    fontSize: 16
  },
  bottomIcon1: {
    width: 28,
    height: 28,
    marginLeft: 284
  },
  bottomLine2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle2: {
    fontSize: 16
  },
  bottomIcon2: {
    width: 28,
    height: 28,
    marginLeft: 152
  },
  bottomLine3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle3: {
    fontSize: 16
  },
  bottomIcon3: {
    width: 28,
    height: 28,
    marginLeft: 128
  },
  bottomLine4: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle4: {
    fontSize: 16
  },
  bottomIcon4: {
    width: 28,
    height: 28,
    marginLeft: 46
  },
  bottomLine5: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle5: {
    fontSize: 16
  },
  bottomIcon5: {
    width: 28,
    height: 28,
    marginLeft: 79
  },
  bottomLine6: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle6: {
    fontSize: 16
  },
  bottomIcon6: {
    width: 28,
    height: 28,
    marginLeft: 58
  },
  bottomLine7: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle7: {
    fontSize: 16
  },
  bottomIcon7: {
    width: 28,
    height: 28,
    marginLeft: 320
  },
  bottomLine8: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle8: {
    fontSize: 16
  },
  bottomIcon8: {
    width: 28,
    height: 28,
    marginLeft: 217
  },
  bottomLine9: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  bottomTitle9: {
    fontSize: 16
  },
  bottomIcon9: {
    width: 28,
    height: 28,
    marginLeft: 249
  },
  bottomLine10: {
    flexDirection: "row",
    alignItems: "center"
  },
  bottomTitle10: {
    fontSize: 16
  },
  bottomIcon10: {
    width: 28,
    height: 28,
    marginLeft: 204
  },
  itemLogout: {
    width: screenWidth,
    height: "auto",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    marginTop: 8,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 2
  },
  logoutLine1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  logoutText1: {
    fontSize: 16
  },
  imageLogout: {
    width: 28,
    height: 28,
    marginLeft: 294
  },
  checkResult: {
    marginLeft: 244
  }
})
export default styles
