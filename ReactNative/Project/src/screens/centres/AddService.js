import React, { useState } from 'react';
import { View, ScrollView, Text, Button, Alert } from 'react-native';
import { serverTimestamp } from 'firebase/firestore';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/header';
import { Input } from '../../components/input';
import styles, { pickerSelectStyles } from './AddCentreStyles';
import { centreDetails, centresStore } from '../../firebase/services';
import Splash from '../splash';
import useFireStore from '../../hooks/useFireStore';

const servicesName = {
  long: 'Long Day Care',
  kindergarten: 'Pre-School/ Kindergarten',
  school: 'Before & After School Care',
  family: 'Family Day Care',
  vacation: 'Vacation Care',
};

const AddService = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const serviceList = useFireStore(
    centreDetails.services,
    route.params.centreId
  );
  const [disabled, setDisabled] = useState(false);
  const initialValues = {
    type: '',
    price: 0,
    numberOfMonths: 0,
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string().required('Please, select type!'),
    price: Yup.number('Waitlist must be a positive number!')
      .required('Please, enter price!')
      .positive('Number must be a positive number!')
      .integer('Must be a positive number!'),
    numberOfMonths: Yup.number('Waitlist must be a positive number!')
      .min(1, 'Month must be more than or equal to 1!')
      .max(12, 'Month must be less than or equal to 12!')
      .required('Please, enter number of months!')
      .positive('Number must be a positive number!')
      .integer('Must be a positive number!'),
  });

  const addService = async (values) => {
    setDisabled(true);

    if (serviceList && serviceList.length > 0) {
      const service = serviceList.find(
        (service) => service.type === values.type
      );
      if (service) {
        Alert.alert('Service type already exists!');
        setDisabled(false);
        return;
      }
    }

    await centresStore.addDoc(centreDetails.services, {
      centreId: route.params.centreId,
      name: servicesName[values.type],
      numberOfMonths: parseInt(values.numberOfMonths),
      type: values.type,
      price: parseInt(values.price),
      createdAt: serverTimestamp(),
    });
    Alert.alert('Successfully', 'Add service successfully!', [
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
      <Header title='Add Service' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => addService(values)}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              setFieldTouched,
              handleSubmit,
            }) => (
              <View>
                <View style={styles.mb20}>
                  <Text style={styles.label}>Select type</Text>
                  <RNPickerSelect
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: 'Select type', value: values.type }}
                    onValueChange={handleChange('type')}
                    items={[
                      { value: 'long', label: 'Long Day Care' },
                      {
                        value: 'kindergarten',
                        label: 'Pre-School/ Kindergarten',
                      },
                      { value: 'school', label: 'Before & After School Care' },
                      { value: 'family', label: 'Family Day Care' },
                      { value: 'vacation', label: 'Vacation Care' },
                    ]}
                    onBlur={() => setFieldTouched('type')}
                  />
                  {errors.type && (
                    <Text style={styles.warning}>{errors.type}</Text>
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
                    onChangeText={handleChange('numberOfMonths')}
                    onBlur={handleBlur('numberOfMonths')}
                    value={values.numberOfMonths}
                    label='Number of months'
                    placeholder='Number of months'
                    keyboardType='numeric'
                  />
                  {errors.numberOfMonths && (
                    <Text style={styles.warning}>{errors.numberOfMonths}</Text>
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

export default AddService;
