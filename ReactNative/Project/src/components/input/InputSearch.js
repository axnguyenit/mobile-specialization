import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'

import IconSearch from '../../assets/images/ic-search.png'

export const InputSearch = (props) => {
  const { placeholder, onPress } = props
  return (
    <View style={styles.inputSearch}>
      <Image source={IconSearch} style={styles.img} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: '100%'
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  input: {
    width: '100%'
  }
})

export default InputSearch
