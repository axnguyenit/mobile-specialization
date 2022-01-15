import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { auth } from '../../firebase/config';

export function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>More</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MoreItem', { name: 'MoreItem' })}
      >
        <View style={styles.mainScreen}>
          <View style={styles.item}>
            <View style={styles.leftItem}>
              <Image
                style={styles.image}
                source={require('../../assets/images/user-avatar.png')}
              />
              <View style={styles.rightItem}>
                <Text style={styles.name}>Admin</Text>
                <Text style={styles.rule}>{auth.currentUser.email}</Text>
              </View>
            </View>
            <Image
              style={styles.icCaret}
              source={require('../../assets/icons/more/ic-caret-right.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
