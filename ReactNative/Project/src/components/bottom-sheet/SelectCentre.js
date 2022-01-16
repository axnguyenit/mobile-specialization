import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { InputSearch } from '../input';
import Icon, { Icons } from '../icons';
import styles from './styles';
import ImgSuccess from '../../assets/icons/auth/success.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCentre } from '../../redux/centreSlice';

const SelectCentre = (props) => {
  const dispatch = useDispatch();
  const { onPress } = props;
  const { centres, selectedCentreId } = useSelector((state) => state.centres);

  const handleSelectCentre = (centreId) => {
    dispatch(selectCentre(centreId));
    onPress();
  };

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

      <TouchableOpacity
        onPress={() => handleSelectCentre('')}
        style={[
          styles.centreItem,
          { backgroundColor: selectedCentreId === '' ? '#FFF0FB' : '#FFF' },
        ]}
      >
        <Image source={ImgSuccess} style={styles.imgSelectCentre} />
        <Text>All Centre</Text>

        <View
          style={[
            styles.circle,
            { borderColor: selectedCentreId === '' ? '#DB147F' : '#ACB2B8' },
          ]}
        >
          <View
            style={[
              styles.insideCircle,
              { backgroundColor: selectedCentreId === '' ? '#DB147F' : '#FFF' },
            ]}
          />
        </View>
      </TouchableOpacity>

      {centres &&
        centres.map((centre) => (
          <CentreItem
            key={centre.id}
            centre={centre}
            selectedCentreId={selectedCentreId}
            handleSelectCentre={handleSelectCentre}
          />
        ))}

      {/* <FlatList
        style={styles.centres}
        data={centres}
        renderItem={CentreItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};

const CentreItem = ({ centre, selectedCentreId, handleSelectCentre }) => (
  <TouchableOpacity
    onPress={() => handleSelectCentre(centre.id)}
    style={[
      styles.centreItem,
      { backgroundColor: centre.id === selectedCentreId ? '#FFF0FB' : '#FFF' },
    ]}
  >
    <Image source={ImgSuccess} style={styles.imgSelectCentre} />
    <Text>{centre.name}</Text>
    <View
      style={[
        styles.circle,
        { borderColor: centre.id === selectedCentreId ? '#DB147F' : '#ACB2B8' },
      ]}
    >
      <View
        style={[
          styles.insideCircle,
          {
            backgroundColor:
              centre.id === selectedCentreId ? '#DB147F' : '#FFF',
          },
        ]}
      />
    </View>
  </TouchableOpacity>
);

export default SelectCentre;
