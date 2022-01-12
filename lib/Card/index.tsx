import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

import BookedCard from "./BookedCard";
import ContinueCard from "./ContinueCard";
import GiftCard from "./GiftCard";
import WakeUpCard from "./WakeUpCard";
import { useConfig } from "../../config";

interface Props extends ViewProps {
  /**
   * @default true
   */
  shadow?: boolean;
}

interface CardProps extends React.FC<Props> {
  Continue: typeof ContinueCard;
  Gift: typeof GiftCard;
  WakeUp: typeof WakeUpCard;
  Booked: typeof BookedCard;
}

export const Card: CardProps = ({
  shadow = true,
  children,
  style,
  ...otherProps
}) => {
  const { colors } = useConfig();
  const backgroundColor: ViewStyle = { backgroundColor: colors.secondary.iv };
  return (
    <View
      style={[shadow && styles.shadow, styles.card, backgroundColor, style]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

Card.Continue = ContinueCard;
Card.Gift = GiftCard;
Card.WakeUp = WakeUpCard;
Card.Booked = BookedCard;

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 12,
  },
  shadow: {
    shadowColor: "#19282F",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
