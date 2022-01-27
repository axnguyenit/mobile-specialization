import React, { useState } from 'react';
import { View, ScrollView, Text, Button, Alert } from 'react-native';
import { serverTimestamp } from 'firebase/firestore';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/header';
import { Input } from '../../components/input';
import styles, { pickerSelectStyles } from './AddCentreStyles';
import { centreDetails, centresStore } from '../../firebase/services';
import Splash from '../splash';

const servicesName = {
  long: 'Long Day Care',
  kindergarten: 'Pre-School/ Kindergarten',
  school: 'Before & After School Care',
  family: 'Family Day Care',
  vacation: 'Vacation Care',
};

const AddMarketing = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [disabled, setDisabled] = useState(false);
  const initialValues = {
    name: '',
    price: 0,
    info: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter name!'),
    price: Yup.number('Price must be a positive number!')
      .required('Please, enter price!')
      .positive('Price must be a positive number!'),
    info: Yup.string().required('Please, enter info!'),
  });

  const addMarketing = async (values) => {
    console.log(values);
    setDisabled(true);

    await centresStore.addDoc(centreDetails.marketing, {
      centreId: route.params.centreId,
      name: values.name,
      price: parseInt(values.price),
      info: values.info,
      status: true,
      createdAt: serverTimestamp(),
    });
    Alert.alert('Successfully', 'Add marketing successfully!', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Centres');
        },
      },
    ]);
    setDisabled(false);
  };

  return (
    <View style={[styles.flex1, styles.bgWhite]}>
      {disabled && <Splash />}
      <Header title='Add Marketing' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => addMarketing(values)}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, errors, handleSubmit }) => (
              <View>
                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    label='Name'
                    placeholder='Name'
                  />
                  {errors.name && (
                    <Text style={styles.warning}>{errors.name}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    value={values.price}
                    label='Price ($)'
                    placeholder='Price'
                    keyboardType='numeric'
                  />
                  {errors.price && (
                    <Text style={styles.warning}>{errors.price}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('info')}
                    onBlur={handleBlur('info')}
                    value={values.info}
                    label='Info'
                    placeholder='Info'
                  />
                  {errors.info && (
                    <Text style={styles.warning}>{errors.info}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Button
                    onPress={handleSubmit}
                    title='Submit'
                    color='#DB147F'
                    disabled={disabled}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMarketing;
