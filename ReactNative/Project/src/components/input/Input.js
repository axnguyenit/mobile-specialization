import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
  const { label, placeholder, keyboardType, secureTextEntry, onChangeText } =
    props
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText ? (text) => onChangeText(text) : () => {}}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  formControl: {
    borderColor: '#D3CCCC',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    color: '#2D1F21'
  }
})

export default Input
