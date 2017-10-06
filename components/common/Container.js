import React from 'react';
import { View } from 'react-native';




const Container = ({children,style}) => {
  return (
   <View style={[styles.containerStyle, style]}>
     {children}
   </View>

  );
};

const styles = {
 containerStyle: {
   borderBottomWidth: 1,
   padding: 5,
   backgroundColor: '#fff',
   justifyContent: 'flex-start',
   flexDirection: 'row',
   borderColor: '#ddd',
   position: 'relative'

 }
};

// flexDirection
// flexDirection: 'column'(default) it sets elements vartically
// flexDirection: 'row' it sets elements horizontaly.

export { Container };