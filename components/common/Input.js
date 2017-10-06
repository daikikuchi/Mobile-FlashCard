import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  //secureTextEntry is undefined for Email input, undefined is false.
  const { inputStyle , containerStyle } = styles;

  return (
     <View style={containerStyle}>
       <TextInput
         secureTextEntry={secureTextEntry} // is same as secureTextEntry ={true}, input is secured
         placeholder={placeholder}
         autoCorrect={false} // to stop autocorrect
         style={inputStyle}
         value={value} // pass value prop from LoginForm
         onChangeText={onChangeText}  // pass onCangeText function props from LoginForm
       />
     </View>

  );
};

const styles = {
   inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
   },
   containerStyle: {
     height: 40,
     flex: 1, // fills up all the available spcase that thee is
     flexDirection: 'row', // siblings inside of <View> show up alongside each other, horizontaly
     alignItems: 'center'  // items inside of view are lined up vertically in the middle.
   }
 };

// I want to pass in the lable text as a prop to this component to make this component reusable.
// whenwever we have siblings with a flex property designated on the style objects,
// the flex property is how we allocate or a proportion available to each other
export { Input };
