import React from "react";

import { BaseCardProps } from "./type";
import { useConfig } from "../../config";
import { Image, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Button } from "../Button";
import { Shape } from "../Shape";
import { Typography } from "../Typography";
import { lightPalette } from "../../style/Colors";
import {
  BookedCards,
  ContinueCardProps,
  GiftCardProps,
  WakeUpCardProps,
} from "./type";

// =========================================
// Base Card
// =========================================
const BaseCard: React.FC<BaseCardProps> = ({
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

// =========================================
// Card
// =========================================
interface CardProps extends React.FC<BaseCardProps> {
  Continue: typeof ContinueCard;
  Gift: typeof GiftCard;
  WakeUp: typeof WakeUpCard;
  Booked: typeof BookedCard;
}

export const Card: CardProps = (props) => {
  return <BaseCard {...props} />;
};

// =========================================
// BookedCard
// =========================================
const BookedCard: React.FC<BookedCards> = ({ icon, title, caption, theme }) => {
  const { gs, colors } = useConfig();
  const dakColor = colors[theme].iii;
  const lightColor = colors[theme].ii;

  return (
    <Card style={[{ backgroundColor: dakColor }]}>
      <View style={[gs.row, gs.acenter]}>
        <View style={[gs.static]}>
          <Shape.Square dimension={60} backgroundColor={lightColor}>
            <Typography.Text>{icon}</Typography.Text>
          </Shape.Square>
        </View>
        <View style={[gs.dynamic, gs.pl_2]}>
          <Typography.Title style={{ color: lightColor }}>
            {title}
          </Typography.Title>
          <Typography.Text
            style={[{ color: lightColor }, bookedStyles.opacity]}
          >
            {caption}
          </Typography.Text>
        </View>
      </View>
    </Card>
  );
};
const bookedStyles = StyleSheet.create({
  opacity: {
    opacity: 0.5,
  },
});

// =========================================
// ContinueCard
// =========================================
const ContinueCard: React.FC<ContinueCardProps> = ({
  color,
  icon,
  title,
  caption,
  shapeColor,
  onPress,
}) => {
  const { gs } = useConfig();
  const textColor: TextStyle = { color: lightPalette.primary.iv };
  const backgroundColor: ViewStyle = { backgroundColor: color };
  const shapeBackgroundColor: ViewStyle = {
    backgroundColor: shapeColor ?? color,
  };

  return (
    <Card style={[backgroundColor]}>
      <View style={[gs.row, gs.acenter, gs.mb_2, gs.acenter]}>
        {icon && (
          <Shape.Square style={[shapeBackgroundColor, gs.mr_1]}>
            {icon}
          </Shape.Square>
        )}
        <Typography.Title style={[textColor, gs.mb_1]}>
          {title}
        </Typography.Title>
      </View>
      <View style={[gs.row]}>
        <View style={[gs.dynamic]}>
          <Typography.Text style={[textColor]}>{caption}</Typography.Text>
        </View>
        <View style={[gs.pl_3, gs.static, gs.jcenter]}>
          <Button.Circle onPress={onPress} color={shapeColor ?? color}>
            <AntDesign name="gift" size={20} color={"#fff"} />
          </Button.Circle>
        </View>
      </View>
    </Card>
  );
};

// =========================================
// GiftCard
// =========================================
const GiftCard: React.FC<GiftCardProps> = ({ caption, title, theme, icon }) => {
  const { gs, colors } = useConfig();
  const background: ViewStyle = { backgroundColor: colors[theme].i };
  const shapeBackground: ViewStyle = { backgroundColor: colors[theme].ii };
  const textColor: TextStyle = { color: lightPalette.primary.iv };

  const topShape = (
    <Card
      shadow={false}
      style={[shapeBackground, giftStyles.shape, giftStyles.topShape]}
    />
  );
  const cornerShape = (
    <Card
      shadow={false}
      style={[shapeBackground, giftStyles.shape, giftStyles.cornerShape]}
    />
  );
  const circleShape = (
    <Card
      shadow={false}
      style={[shapeBackground, giftStyles.shape, giftStyles.circle]}
    />
  );

  return (
    <Card style={[background, gs.ofh]}>
      <View>
        {icon && <View style={[gs.mb_1, gs.acenter, gs.jcenter]}>{icon}</View>}
        <View style={[gs.mb_1]}>
          <Typography.Title style={[textColor, gs.textCenter]}>
            {title}
          </Typography.Title>
        </View>
        <View style={[gs.mb_1]}>
          <Typography.Text style={[textColor, gs.textCenter]}>
            {caption}
          </Typography.Text>
        </View>
      </View>
      {topShape}
      {cornerShape}
      {circleShape}
    </Card>
  );
};
const giftStyles = StyleSheet.create({
  shape: {
    position: "absolute",
    zIndex: -1,
  },
  topShape: {
    width: "40%",
    height: 100,
    top: -10,
    left: "30%",
  },
  cornerShape: {
    width: 100,
    height: 100,
    bottom: 0,
    left: 0,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    bottom: 24,
    right: 24,
  },
});

// =========================================
// WakeupCard
// =========================================
const WakeUpCard: React.FC<WakeUpCardProps> = ({
  theme,
  image,
  firstLine,
  secondLine,
}) => {
  const { gs, colors } = useConfig();
  const backgroundColor: ViewStyle = { backgroundColor: colors[theme].ii };
  const textColor: TextStyle = { color: lightPalette.primary.iv };

  return (
    <Card style={[backgroundColor]}>
      <View style={[gs.mb_4]}>
        <Typography.Title style={[textColor]}>{firstLine}</Typography.Title>
        {secondLine && (
          <Typography.Title style={[gs.mb_1, textColor]}>
            {secondLine}
          </Typography.Title>
        )}
      </View>
      <View>
        <Image
          resizeMethod={"scale"}
          resizeMode={"contain"}
          source={image}
          style={{ height: 100 }}
        />
      </View>
    </Card>
  );
};

Card.Continue = ContinueCard;
Card.Gift = GiftCard;
Card.WakeUp = WakeUpCard;
Card.Booked = BookedCard;
