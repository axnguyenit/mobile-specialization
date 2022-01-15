import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles/ServiceItemStyles';

const ServiceItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.serviceItem}>
      <View style={styles.serviceImgArea}>
        <Image source={item.icon} style={styles.serviceImg} />
      </View>

      <View>
        <Text style={styles.serviceTitle}>{item.title}</Text>
        <Text style={styles.serviceMonths}>{item.months}</Text>
        <View style={styles.servicePrice}>
          <Text style={styles.serviceTitle}>${item.price.toFixed(2)}</Text>
          <Text>&nbsp;/&nbsp;full day</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceItem;
