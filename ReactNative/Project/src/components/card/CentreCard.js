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

const CentreCard = ({centre}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.centerCard}
      onPress={() => navigation.navigate('CentreDetails')}
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
            <View style={[styles.row, { width: '55 %' }]}>
              <Image style={styles.icon} source={IconBaby} />
              <Text>{centre.children} children</Text>
            </View>
            <View style={styles.row}>
              <Image style={styles.icon} source={IconWaitList} />
              <Text>{centre.waitlist} waitlisted</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.row, { width: '55 %' }]}>
              <Image style={[styles.icon]} source={IconKindi} />
              <Text style={styles.kindi}>KindiCare Basic</Text>
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
