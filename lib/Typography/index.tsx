import * as React from "react";
import { Text as RNText, TextStyle, TouchableOpacity } from "react-native";

import {
  TitleProps,
  TypographyProps,
  BaseTypographyProps,
  LinkProps,
} from "./type";
import { styles } from "./styles";
import { useConfig } from "../../config";

const BaseTypography: React.FC<BaseTypographyProps> = ({
  children,
  style,
  bold,
  thin,
  underlined,
  deleted,
  italic,
  mark,
  markColor,
  link,
  code, // TODO
  disabled,
  ...otherProps
}) => {
  const { gs, colors } = useConfig();
  const textColor: TextStyle = { color: colors.secondary.i };
  let calculatedStyles: TextStyle[] = [];
  if (bold) {
    calculatedStyles.push(styles.bold);
  } else if (thin) {
    calculatedStyles.push(styles.thin);
  }

  if (underlined || link) {
    calculatedStyles.push(styles.underlined);
  } else if (deleted) {
    calculatedStyles.push(styles.deleted);
  }

  if (italic) calculatedStyles.push(styles.italic);
  if (mark) {
    calculatedStyles.push({
      backgroundColor: markColor ? markColor : "yellow",
    });
  }

  if (disabled) calculatedStyles.push(styles.disabled);
  else if (link) calculatedStyles.push(styles.link);

  return (
    <RNText
      style={[textColor, styles.text, gs.textAlign, calculatedStyles, style]}
      {...otherProps}
    >
      {children}
    </RNText>
  );
};

export const Typography: TypographyProps = ({
  children,
  style,
  ...otherProps
}) => {
  const { gs } = useConfig();

  return (
    <BaseTypography style={[gs.textAlign, style]} {...otherProps}>
      {children}
    </BaseTypography>
  );
};

export const Paragraph: React.FC<BaseTypographyProps> = ({
  children,
  ...otherProps
}) => {
  return <BaseTypography {...otherProps}>{children}</BaseTypography>;
};

export const Link: React.FC<LinkProps> = ({
  children,
  onPress,
  ...otherProps
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BaseTypography link {...otherProps}>
        {children}
      </BaseTypography>
    </TouchableOpacity>
  );
};

export const Title: React.FC<TitleProps> = ({
  children,
  style,
  level = 5,
  ...otherProps
}) => {
  let calculatedStyles: TextStyle[] = [];

  switch (level) {
    case 1:
      calculatedStyles.push(styles.h1);
      break;
    case 2:
      calculatedStyles.push(styles.h2);
      break;
    case 3:
      calculatedStyles.push(styles.h3);
      break;
    case 4:
      calculatedStyles.push(styles.h4);
      break;
    case 5:
    default:
      calculatedStyles.push(styles.h5);
  }

  return (
    <BaseTypography
      {...otherProps}
      style={[styles.bold, calculatedStyles, style]}
    >
      {children}
    </BaseTypography>
  );
};

export const Text: React.FC<BaseTypographyProps> = ({
  children,
  ...otherProps
}) => {
  return <BaseTypography {...otherProps}>{children}</BaseTypography>;
};

Typography.Paragraph = Paragraph;
Typography.Text = Text;
Typography.Title = Title;
Typography.Link = Link;
