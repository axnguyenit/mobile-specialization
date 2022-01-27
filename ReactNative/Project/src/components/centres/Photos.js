import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles/PhotoStyles';
import CentrePhoto1 from '../../assets/images/summary/centre-photo-1.png';
import CentrePhoto2 from '../../assets/images/summary/centre-photo-2.png';
import CentrePhoto3 from '../../assets/images/summary/centre-photo-3.png';

function Photos({ photos }) {
  const renderPhoto = () => {
    let photoList = [];
    if (photos && photos.length <= 3) {
      photos.map((photo, i) => {
        photoList.push(
          <TouchableOpacity>
            <Image key={i} style={styles.photo} source={{ uri: photo }} />
          </TouchableOpacity>
        );
      });
    }
    if (photos && photos.length === 4) {
      photos.map((photo, i) => {
        photoList.push(
          <TouchableOpacity>
            <Image key={i} style={styles.photo} source={{ uri: photo }} />
          </TouchableOpacity>
        );
      });
    }
    if (photos && photos.length >= 5) {
      for (let i = 0; i < 3; i++) {
        photoList.push(
          <TouchableOpacity>
            <Image key={i} style={styles.photo} source={{ uri: photos[i] }} />
          </TouchableOpacity>
        );
      }
      photoList.push(
        <TouchableOpacity style={styles.photoMore}>
          <Image style={styles.photo1} source={CentrePhoto2} />
          <Text style={styles.photoLayout}>+ {photos.length - 3}</Text>
        </TouchableOpacity>
      );
    }
    return photoList;
  };

  return <View style={styles.photos}>{renderPhoto()}</View>;
}

export default Photos;
