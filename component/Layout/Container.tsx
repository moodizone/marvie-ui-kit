import React from 'react';
import {StyleSheet, View} from "react-native";

const Container:React.FC = ({children,...otherProps}) => {
  return (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingLeft:24,
    paddingRight:24,
    width:'100%',
    height:'100%',
  }
})

export default Container;
