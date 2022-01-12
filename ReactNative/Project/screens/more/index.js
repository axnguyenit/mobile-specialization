/** @format */

import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./styles"

export function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>More</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MoreItem", { name: "MoreItem" })}
      >
        <View style={styles.mainScreen}>
          <View style={styles.item}>
            <View style={styles.icon}>
              <Image
                style={styles.image}
                source={require("../../assets/icon-avatar.png")}
              />
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.name}>Jane Cooper</Text>
              <Text style={styles.rule}>Provider User (Admin)</Text>
            </View>
            <View style={styles.iconRight}>
              <Image
                style={styles.image2}
                source={require("../../assets/icon-icon_more.png")}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
