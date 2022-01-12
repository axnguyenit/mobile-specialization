/** @format */

import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from "react-native"
import { InputSearch } from "../input"
import Icon, { Icons } from "../icons"
import CentreImg from "../../assets/images/centre-img.png"

const arr = [
  {
    id: 20010001,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010002,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010003,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010004,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010005,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010006,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010007,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010008,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 20010009,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  },
  {
    id: 200100010,
    img: CentreImg,
    title: "Goodstart Early Learning ABC"
  }
]

const SelectCentre = (props) => {
  const { onPress } = props
  return (
    <View style={styles.view}>
      <View style={styles.heading}>
        <TouchableOpacity style={styles.close} onPress={onPress}>
          <Icon type={Icons.Ionicons} name="close" color="#2D1F21" size={24} />
        </TouchableOpacity>
        <Text
          style={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
        >
          Select Centre
        </Text>
      </View>
      <View>
        <InputSearch placeholder="Search Centre Name" />
      </View>

      <FlatList
        style={styles.centres}
        data={arr}
        renderItem={CentreItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const CentreItem = ({ item }) => (
  <TouchableOpacity style={[styles.centreItem, { backgroundColor: "#FFF0FB" }]}>
    <Image source={item.img} style={styles.img} />
    <Text>{item.title}</Text>

    <View style={[styles.circle, { borderColor: "#ACB2B8" }]}>
      <View
        style={{
          borderRadius: 999,
          width: 10,
          height: 10,
          backgroundColor: "#DB147F"
        }}
      />
    </View>
  </TouchableOpacity>
)

const { height } = Dimensions.get("window")
const styles = StyleSheet.create({
  view: {
    padding: 15,
    backgroundColor: "#fff",
    width: "100%",
    height: height - 150
  },
  heading: {
    position: "relative",
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#F1F1F5",
    borderBottomWidth: 1
  },
  close: {
    position: "absolute",
    top: -4,
    left: 0,
    zIndex: 5
  },
  img: {
    width: 36,
    height: 36,
    borderRadius: 999,
    resizeMode: "contain",
    marginRight: 15
  },
  centres: {
    marginTop: 15
  },
  centreItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 6
  },
  circle: {
    borderRadius: 999,
    borderWidth: 2,
    width: 16,
    height: 16,
    position: "absolute",
    right: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default SelectCentre
