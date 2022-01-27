import React, { useState } from 'react';
import { View, ScrollView, Text, Button, Alert } from 'react-native';
import { serverTimestamp } from 'firebase/firestore';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/header';
import { Input } from '../../components/input';
import styles, { pickerSelectStyles } from './AddCentreStyles';
import { centreDetails, centresStore } from '../../firebase/services';
import Splash from '../splash';
import featuresIcon from '../../fake-db/centre-details/features';
import marketing from '../../fake-db/centre-details/marketing';
import ratings from '../../fake-db/centre-details/ratingsAndReviews';

const AddCentre = () => {
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(false);
  const initialValues = {
    name: '',
    location: '',
    children: 0,
    waitlist: 0,
    type: '',
    adminEmail: '',
    description: '',
    region: '',
    lga: '',
    openDay: new Date(),
    phone: 0,
    website: '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please, enter name!'),
    location: Yup.string().required('Please, enter location!'),
    children: Yup.number('Children must be a positive number!')
      .required('Please, enter number of children!')
      .positive('Number must be a positive number!')
      .integer('Must be a positive number!'),
    waitlist: Yup.number('Waitlist must be a positive number!')
      .required('Please, enter number of waitlist!')
      .positive('Number must be a positive number!')
      .integer('Must be a positive number!'),
    type: Yup.string().required('Please, select type!'),
    adminEmail: Yup.string()
      .email('Email must be a valid email!')
      .required('Please, enter admin email!'),
    description: Yup.string().required('Please, enter description!'),
    region: Yup.string().required('Please, enter region!'),
    lga: Yup.string().required('Please, enter LGA!'),
    openDay: Yup.date().required('Please, select Open Day!'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid!'),
    website: Yup.string().url(),
  });

  const addCentre = async (values) => {
    setDisabled(true);
    await centresStore.addDoc('centres', {
      name: values.name,
      location: values.location,
      type: values.type,
      children: values.children,
      waitlist: values.waitlist,
      img: 'https://firebasestorage.googleapis.com/v0/b/project-react-native-fafe7.appspot.com/o/centre%2F1643188292893-cover.png?alt=media&token=1ba194ae-0daf-4bb1-b1d6-af1ddc92f4dc',
      createdAt: serverTimestamp(),
    });

    const latestCentre = await centresStore.getLatestCollection('centres');

    if (latestCentre) {
      await centresStore.addDoc(centreDetails.summary, {
        centreId: latestCentre.id,
        active: true,
        openDay: new Date(values.openDay),
        phone: values.phone,
        website: values.website,
        createdAt: serverTimestamp(),
      });

      await centresStore.addDoc(centreDetails.information, {
        centreId: latestCentre.id,
        adminEmail: values.adminEmail,
        description: values.description,
        region: values.region,
        lga: values.lga,
        createdAt: serverTimestamp(),
      });

      featuresIcon.map(async (feature, i) => {
        await centresStore.addDoc('features', {
          centreId: latestCentre.id,
          name: feature.label,
          status: true,
          stt: i + 1,
          createdAt: serverTimestamp(),
        });
      });

      ratings.map(async (item) => {
        await centresStore.addDoc(centreDetails.ratings, {
          ...item,
          centreId: latestCentre.id,
          createdAt: serverTimestamp(),
        });
      });
    }

    setDisabled(false);
    Alert.alert(
      'Failed',
      latestCentre ? 'Add centre successfully!' : 'Something went wrong!',
      [
        {
          text: latestCentre ? 'View' : 'Try again',
          onPress: () => {
            latestCentre &&
              navigation.navigate('CentreDetails', {
                centreId: latestCentre.id,
              });
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.flex1, styles.bgWhite]}>
      {disabled && <Splash />}
      <Header title='Add Centre' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => addCentre(values)}
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
                  <Input
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    label='Name'
                    placeholder='Name'
                    onBlur={() => setFieldTouched('name')}
                  />
                  {errors.name && (
                    <Text style={styles.warning}>{errors.name}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                    label='Location'
                    placeholder='Location'
                  />
                  {errors.location && (
                    <Text style={styles.warning}>{errors.location}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('children')}
                    onBlur={handleBlur('children')}
                    value={values.children}
                    label='Number of children'
                    placeholder='Number of children'
                    keyboardType='numeric'
                  />
                  {errors.children && (
                    <Text style={styles.warning}>{errors.children}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('waitlist')}
                    onBlur={handleBlur('waitlist')}
                    value={values.waitlist}
                    label='Number of waitlist'
                    placeholder='Number of waitlist'
                    keyboardType='numeric'
                  />
                  {errors.waitlist && (
                    <Text style={styles.warning}>{errors.waitlist}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Text style={styles.label}>Select type</Text>
                  <RNPickerSelect
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: 'Select type', value: values.type }}
                    onValueChange={handleChange('type')}
                    items={[
                      { label: 'Basic', value: 'basic' },
                      { label: 'Essential', value: 'essential' },
                      { label: 'Enterprise', value: 'enterprise' },
                      { label: 'Premium', value: 'premium' },
                    ]}
                    onBlur={() => setFieldTouched('type')}
                  />
                  {errors.type && (
                    <Text style={styles.warning}>{errors.type}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('adminEmail')}
                    onBlur={handleBlur('adminEmail')}
                    value={values.adminEmail}
                    label='Admin email'
                    placeholder='Admin email'
                  />
                  {errors.adminEmail && (
                    <Text style={styles.warning}>{errors.adminEmail}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    label='Description'
                    placeholder='Description'
                  />
                  {errors.description && (
                    <Text style={styles.warning}>{errors.description}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('region')}
                    onBlur={handleBlur('region')}
                    value={values.region}
                    label='Region'
                    placeholder='Region'
                  />
                  {errors.region && (
                    <Text style={styles.warning}>{errors.region}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('lga')}
                    onBlur={handleBlur('lga')}
                    value={values.lga}
                    label='LGA'
                    placeholder='LGA'
                  />
                  {errors.lga && (
                    <Text style={styles.warning}>{errors.lga}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Text style={styles.label}>Open day</Text>
                  <DatePicker
                    style={{
                      borderColor: '#ccc',
                      borderWidth: 1,
                      borderRadius: 3,
                      width: '100%',
                      backgroundColor: '#fff',
                    }}
                    mode='date'
                    placeholder='Select date'
                    // format='DD-MM-YYYY'
                    date={values.openDay}
                    // minDate={new Date()}
                    maxDate={new Date()}
                    confirmBtnText='Confirm'
                    cancelBtnText='Cancel'
                    showIcon={false}
                    customStyles={{
                      placeholderText: {
                        color: '#999',
                        fontSize: 15,
                      },
                      dateInput: {
                        position: 'absolute',
                        left: 0,
                        marginLeft: 10,
                        borderWidth: 0,
                        backgroundColor: '#fff',
                      },
                    }}
                    onDateChange={handleChange('openDay')}
                    onBlur={() => handleBlur('openDay')}
                  />
                  {errors.openDay && (
                    <Text style={styles.warning}>{errors.openDay}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    label='Phone'
                    placeholder='Phone'
                  />
                  {errors.phone && (
                    <Text style={styles.warning}>{errors.phone}</Text>
                  )}
                </View>

                <View style={styles.mb20}>
                  <Input
                    onChangeText={handleChange('website')}
                    onBlur={handleBlur('website')}
                    value={values.website}
                    label='Website'
                    placeholder='Website'
                  />
                  {errors.website && (
                    <Text style={styles.warning}>{errors.website}</Text>
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

export default AddCentre;
