import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { InputSearch } from '../input';
import Icon, { Icons } from '../icons';
import styles from './styles';
import centres from '../../fake-db/centres/centres';

const SelectCentre = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.viewSelectCentre}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeSelectCentre} onPress={onPress}>
          <Icon type={Icons.Ionicons} name="close" color="#2D1F21" size={24} />
        </TouchableOpacity>
        <Text style={styles.heading}>Select Centre</Text>
      </View>
      <View>
        <InputSearch placeholder="Search Centre Name" />
      </View>

      <FlatList
        style={styles.centres}
        data={centres}
        renderItem={CentreItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const CentreItem = ({ item }) => (
  <TouchableOpacity style={[styles.centreItem, { backgroundColor: '#FFF0FB' }]}>
    <Image source={item.img} style={styles.imgSelectCentre} />
    <Text>{item.title}</Text>

    <View style={[styles.circle, { borderColor: '#ACB2B8' }]}>
      <View style={[styles.insideCircle, { backgroundColor: '#DB147F' }]} />
    </View>
  </TouchableOpacity>
);

export default SelectCentre;
