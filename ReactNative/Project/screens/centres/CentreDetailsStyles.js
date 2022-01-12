/** @format */

import { StyleSheet, Dimensions, StatusBar } from "react-native"
const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#E5E5E5"
  },
  mainView: {},
  scene: {
    height: 555
  },
  tabBar: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  tabItem: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 8
  },
  tabText: {
    color: "#DB147F",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  tabView: {
    paddingHorizontal: 15
  },
  tabServiceItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    flexDirection: "row"
  },
  tabServiceImgArea: {
    width: 42,
    height: 42,
    marginRight: 10,
    padding: 10,
    borderRadius: 999,
    backgroundColor: "#FFF0FB"
  },
  tabServiceImg: {
    width: 22,
    height: 22
  },
  tabServiceTitle: {
    fontWeight: "bold"
  },
  tabServiceMonths: {
    marginVertical: 5
  },
  tabViewContent: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 10
  },
  // Centre Information
  infoTitle: {
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    marginBottom: 15
  },
  infoName: {
    color: "#2D1F21",
    width: 100
  },
  infoDetails: {
    flexDirection: "row",
    paddingVertical: 4
  },
  bold: {
    fontWeight: "bold"
  },
  // summary
  summaryCollapse: {
    flexDirection: "row",
    alignItems: "center"
  },
  summaryHeading: {
    fontWeight: "bold",
    marginBottom: 12,
    fontSize: 16
  },
  summaryName: {
    width: "57%",
    marginRight: 12
  },
  summaryImg: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: "contain"
  },
  summaryIconCollapse: {
    width: 24,
    height: 24
  },
  summaryExpanded: {
    borderTopColor: "#F2F0F0",
    borderTopWidth: 1,
    borderBottomColor: "#F2F0F0",
    borderBottomWidth: 1,
    marginTop: 15,
    paddingTop: 20,
    paddingBottom: 12,
    marginBottom: 20
  },
  summaryGeneral: {
    flexDirection: "row",
    marginVertical: 8
  },
  summaryGeneralIcon: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  summaryType: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    textTransform: "capitalize"
  },
  summaryGeneralText: {
    fontSize: 16,
    color: "#171725"
  },
  summaryEnquiryIcon: {
    width: 30,
    height: 30,
    marginRight: 12
  },
  summaryEnquiryText: {
    fontSize: 14,
    color: "#2D1F21"
  },
  summaryEnquiry: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  centrePhotos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  centrePhoto: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: "contain"
  },
  centrePhotoMore: {
    position: "relative"
  },
  photoLayout: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, .7)",
    color: "#FFF",
    fontSize: 16,
    paddingVertical: 25,
    textAlign: "center"
  }
})

export default styles
