import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles/PhotoStyles';
import CentrePhoto1 from '../../assets/images/summary/centre-photo-1.png';
import CentrePhoto2 from '../../assets/images/summary/centre-photo-2.png';
import CentrePhoto3 from '../../assets/images/summary/centre-photo-3.png';

function Photos(props) {
  return (
    <View style={styles.photos}>
      <TouchableOpacity>
        <Image style={styles.photo} source={CentrePhoto1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.photo} source={CentrePhoto2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.photo} source={CentrePhoto3} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoMore}>
        <Image style={styles.photo} source={CentrePhoto2} />
        <Text style={styles.photoLayout}>+ 4</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Photos;
