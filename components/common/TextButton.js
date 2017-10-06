import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { orange } from '../../utils/colors'
  // if style undefined, set it to an empty object
  // style object come from prop
export default function TextButton({ children, onPress, style={} }) {
   return (
     <TouchableOpacity onPress={onPress}>
        <Text style={[styles.reset, style]}>{children}</Text>
     </TouchableOpacity>

   )
}

const styles = StyleSheet.create({
  reset: {
   textAlign: 'center',
   color: orange,
  },
})

export { TextButton };

// Anytime that we pass a component that we write to another component
// That component will show up on the prop's object as props.dot children.
// <View> tag's whole purpose is to just waroe other component, it is like a container.
// if we just add a reference to props.children inside of our JSX
// it will render anycomponents that we passed to this current one
