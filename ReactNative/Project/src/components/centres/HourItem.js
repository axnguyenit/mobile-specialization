import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import styles from './styles/HourItemStyles';

const HourItem = ({ title }) => {
  return (
    <View style={styles.flex1}>
      <Text style={styles.hourItemHeading}>{title}</Text>
      <View style={styles.hourItemContainer}>
        <View style={styles.hourItemTabs}>
          <TouchableOpacity style={[styles.hourItemBtnTab, styles.activeBtn]}>
            <Text style={[styles.hourItemBtnText, styles.activeText]}>
              Mon - Fri
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hourItemBtnTab}>
            <Text style={styles.hourItemBtnText}>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hourItemBtnTab}>
            <Text style={styles.hourItemBtnText}>Sun</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hourItemTabView}>
          <View style={styles.hourItemTabTime}>
            <Text style={styles.hourItemTabTimeHeading}>Morning</Text>
            <View style={styles.hourItemHours}>
              <Text style={styles.hourItemHour}>8:00</Text>
              <Text style={styles.hourItemHour}>12:00</Text>
            </View>
          </View>
          <View style={styles.hourItemTabTime}>
            <Text style={styles.hourItemTabTimeHeading}>Afternoon</Text>
            <View style={styles.hourItemHours}>
              <Text style={styles.hourItemHour}>14:00</Text>
              <Text style={styles.hourItemHour}>17:00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HourItem;
