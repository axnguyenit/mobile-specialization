import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon, { Icons } from '../icons'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icon type={Icons.AntDesign} name="arrowleft" color="#000" size={24} />
      </TouchableOpacity>

      <Text style={styles.heading}>Centre Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F2F0F0',
    borderBottomWidth: 1
  },
  back: {
    position: 'absolute',
    top: 42,
    left: 15,
    zIndex: 5
  },
  heading: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default Header
