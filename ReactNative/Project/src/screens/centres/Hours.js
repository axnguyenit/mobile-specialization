import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView
} from 'react-native'

import styles from './CentreDetailsStyles'
import { HourItem } from '../../components/centres'

const hours = [
  {
    type: 'Normal'
  }
]

function Hours(props) {
  return (
    <ScrollView>
      <View style={styles.tabView}>
        <HourItem title="Normal" />
        <HourItem title="School Term" />
        <HourItem title="School Holidays" />
      </View>
    </ScrollView>
  )
}

export default Hours
