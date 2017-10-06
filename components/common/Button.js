import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { orange, white } from '../../utils/colors'
  // if style undefined, set it to an empty object
  // style object come from prop
  const Button = ({ onPress, children }) => {
     const { buttonStyle, textStyle } = styles;

     return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
        </TouchableOpacity>
     );
  };

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: white,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: orange,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
    width: 150
  }
})

export { Button };
