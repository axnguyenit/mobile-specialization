import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

import { auth } from '../../firebase/config'
import styles from './styles'

const arr = [
  'About us',
  'About Kindicare application',
  'The Kindicare Rating Explained',
  'About the National Quality Standard (NQS)',
  'The Value for Money Rating Explained',
  'About the Government Childcare Subsidy',
  'FAQ',
  'Term & Conditions',
  'Privacy Policy',
  'Feedback & Support'
]

export function MoreItem() {
  const [isEnabled, setIsEnabled] = useState(false)
  const navigation = useNavigation()
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>More</Text>
      </View>
      <ScrollView style={styles.bg}>
        <View style={styles.mainItem}>
          <TouchableOpacity style={styles.moreDetailItem}>
            <Text style={styles.moreDetailTitle}>My profile</Text>
            <Image
              style={styles.iconArrow}
              source={require('../../assets/icons/more/ic-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreDetailItem}>
            <Text style={styles.moreDetailTitle}>Language</Text>
            <Text style={styles.moreDetailVal}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreDetailItem}>
            <Text style={styles.moreDetailTitle}>Price display</Text>
            <Text style={styles.moreDetailVal}>AUD</Text>
          </TouchableOpacity>
          <View style={styles.moreDetailItem}>
            <Text style={styles.moreDetailTitle}>Notifications</Text>
            <Switch
              style={styles.switchNotice}
              trackColor={{ false: '#F7F8F9', true: '#DB147F' }}
              thumbColor={isEnabled ? '#FFF ' : '#FFF'}
              ios_backgroundColor="#DB147F"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        {/*  */}
        <View style={styles.mainItem}>
          {arr &&
            arr.map((item, i) => (
              <TouchableOpacity key={i} style={styles.moreDetailItem}>
                <Text style={styles.moreDetailTitle}>{item}</Text>
                <Image
                  style={styles.iconArrow}
                  source={require('../../assets/icons/more/ic-arrow.png')}
                />
              </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logout}>
          <Text style={styles.moreDetailTitle}>Log out</Text>
          <Image
            style={styles.logoutImg}
            source={require('../../assets/icons/more/ic-logout.png')}
          />
        </TouchableOpacity>
        <Text style={styles.height} />
      </ScrollView>
    </View>
  )
}
