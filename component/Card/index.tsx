import React from 'react';
import {StyleSheet, View, ViewProps} from "react-native";
import {useConfig} from "../../ConfigProvier/ConfigProvider";

const Card:React.FC<ViewProps> = ({children,style,...otherProps}) => {
  const { colors } = useConfig();
  const backgroundColor = colors.secondary.iv;
  return (
    <View style={[styles.card, {backgroundColor},style]} {...otherProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    padding:24,
    borderRadius:12,
    shadowColor: "#19282F",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

export default Card;
