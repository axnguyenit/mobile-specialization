import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles/ServiceItemStyles';
import IconBaby from '../../assets/icons/services/ic-baby.png';
import IconAbc from '../../assets/icons/services/ic-abc.png';
import IconBag from '../../assets/icons/services/ic-bag.png';
import IconFamily from '../../assets/icons/services/ic-family.png';
import IconLuggage from '../../assets/icons/services/ic-luggage.png';

const servicesIcon = {
  long: IconBaby,
  kindergarten: IconAbc,
  school: IconBag,
  family: IconFamily,
  vacation: IconLuggage,
};

const ServiceItem = ({ service }) => {
  const renderIcon = (type) => (
    <Image source={servicesIcon[type]} style={styles.serviceImg} />
  );

  return (
    <TouchableOpacity style={styles.serviceItem}>
      <View style={styles.serviceImgArea}>{renderIcon(service.type)}</View>
      <View>
        <Text style={styles.serviceTitle}>{service.name}</Text>
        <Text style={styles.serviceMonths}>
          0 to {service.numberOfMonths} months
        </Text>
        <View style={styles.servicePrice}>
          <Text style={styles.serviceTitle}>${service.price.toFixed(2)}</Text>
          <Text>&nbsp;/&nbsp;full day</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceItem;
