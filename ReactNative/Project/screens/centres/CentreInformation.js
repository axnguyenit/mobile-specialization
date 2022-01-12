/** @format */

import React from "react"
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView
} from "react-native"

import styles from "./CentreDetailsStyles"

function CentreInformation(props) {
  return (
    <ScrollView style={styles.tabView}>
      <View style={styles.tabViewContent}>
        <Text style={styles.infoTitle}>Centre Description</Text>
        <Text style={{ lineHeight: 20 }}>
          At Only About Children South Melbourne, we believe that our holistic
          approach to childcare and kindergarten gives every child the best
          opportunity to reach their full potential. Our quality early learning
          programs are innovative, with a focus on health, wellbeing and
          education. Our unique Campus is located 221 Ferrars Street, South
          Melbourne, in a heritage listed train station which was built in 1883.
          Our two buildings are named Westside and Eastside because they are
          separated by a tram line, which runs between them. We are close to
          several local schools See More
        </Text>
      </View>

      <View style={styles.tabViewContent}>
        <Text style={styles.infoTitle}>Additional Details</Text>
        <View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>Admin Email</Text>
            <Text style={styles.bold}>kha.nguyen01.it@gmail.com</Text>
          </View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>Region</Text>
            <Text style={styles.bold}>Vietnam</Text>
          </View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>LGA</Text>
            <Text style={styles.bold}>Da Nang</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default CentreInformation
