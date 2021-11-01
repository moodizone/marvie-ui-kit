import React from "react";
import { RecordType } from "./type";
import { View } from "react-native";
import Text from "../../Text";

const Record: React.FC<RecordType> = ({ color, title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Record;
