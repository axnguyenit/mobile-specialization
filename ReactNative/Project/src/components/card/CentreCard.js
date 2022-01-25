import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import CardImage from '../../assets/images/centres/cover.png';
import IconLocation from '../../assets/icons/centres/ic-map2.png';
import IconBaby from '../../assets/icons/centres/ic-baby.png';
import IconWaitList from '../../assets/icons/centres/ic-waitlist2.png';
import IconKindi from '../../assets/icons/centres/ic-kindi.png';
import IconService from '../../assets/icons/centres/ic-service.png';

const typeCentre = {
  basic: 'basic',
  essential: 'essential',
  enterprise: 'enterprise',
  premium: 'premium',
};

const CentreCard = ({ centre }) => {
  const navigation = useNavigation();

  const handleTypeCentre = (type) => {
    let backgroundColor,
      color = '';

    switch (type) {
      case typeCentre.basic:
        backgroundColor = '#E9F4FF';
        color = '#32A4FC';
        break;
      case typeCentre.essential:
        backgroundColor = '#FFF4EC';
        color = '#FB8429';
        break;
      case typeCentre.enterprise:
        backgroundColor = '#EDF9F0';
        color = '#36BF57';
        break;
      case typeCentre.premium:
        backgroundColor = '#FFF0FB';
        color = '#DB147F';
        break;
      default:
        break;
    }

    return (
      <Text
        style={[
          styles.kindi,
          { backgroundColor: backgroundColor, color: color },
        ]}
      >
        KindiCare {centre.type}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={styles.centerCard}
      onPress={() =>
        navigation.navigate('CentreDetails', { centreId: centre.id })
      }
    >
      <View>
        <Image source={CardImage} style={styles.image} />
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.heading}>{centre.name}</Text>
        <View>
          <View style={styles.row}>
            <Image style={styles.icon} source={IconLocation} />
            <Text>{centre.location}</Text>
          </View>
          <View style={styles.row}>
            <View style={[styles.row, styles.w60]}>
              <Image style={styles.icon} source={IconBaby} />
              <Text>{centre.children} children</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.icon} source={IconWaitList} />
              <Text>{centre.waitlist} waitlisted</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.row, styles.w60]}>
              <Image style={[styles.icon]} source={IconKindi} />
              {handleTypeCentre(centre.type)}
            </View>
            <View style={styles.row}>
              <Image style={styles.icon} source={IconService} />
              <Text>{centre.services} services</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CentreCard;
