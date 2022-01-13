import * as React from "react";
import { ColorValue, Switch, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Layout from "../../layout";
import { Button, Shape } from "../../lib";
import { useConfig } from "../../config";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { Typography } from "../../lib";
import { ButtonVariant } from "../../lib/Button/type";

type ShapeType = "regular" | "square" | "circle";

const Buttons = () => {
  const { gs, colors } = useConfig();
  const { t } = useAppTranslation();
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<ColorValue>(colors.red.i as Colors);
  const [shape, setShape] = React.useState<ShapeType>("regular");
  const [type, setType] = React.useState<ButtonVariant>("solid");
  const content = (
    <>
      <AntDesign
        name="gift"
        size={20}
        color={type === "solid" ? "#fff" : color}
        style={[gs.mr_1]}
      />
      <Typography.Title style={{ color: type === "solid" ? "#fff" : color }}>
        {t("weeklyProgress")}
      </Typography.Title>
    </>
  );

  return (
    <Layout>
      <View style={[gs.mb_3]}>
        <View style={[gs.row, gs.mb_1]}>
          <Typography.Text>loading :</Typography.Text>
          <Switch
            value={isLoading}
            onValueChange={() => setLoading((prevState) => !prevState)}
          />
        </View>
        <View style={[gs.row, gs.mb_3]}>
          <Typography.Text>isDisabled :</Typography.Text>
          <Switch
            value={isDisabled}
            onValueChange={() => setIsDisabled((prevState) => !prevState)}
          />
        </View>
        <View style={[gs.row, gs.mb_3, gs.wrap]}>
          {["regular", "circle", "square"].map((s) => (
            <Typography.Link
              key={s}
              style={[gs.mr_1, gs.mb_1]}
              onPress={() => setShape(s as ShapeType)}
            >
              {s}
            </Typography.Link>
          ))}
        </View>
        <View style={[gs.row, gs.mb_3, gs.wrap]}>
          {["solid", "outlined", "ghost"].map((sh) => (
            <Typography.Link
              key={sh}
              style={[gs.mr_1, gs.mb_1]}
              onPress={() => setType(sh as ButtonVariant)}
            >
              {sh}
            </Typography.Link>
          ))}
        </View>
        <View style={[gs.row, gs.mb_1, gs.wrap]}>
          {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
            <TouchableOpacity
              onPress={() => setColor(colors[c as Colors].i as ColorValue)}
              style={[gs.mr_1, gs.mb_1]}
              key={c}
            >
              <Shape.Square backgroundColor={colors[c as Colors].i} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={[gs.mb_3]}>
        {shape === "regular" && (
          <Button
            loading={isLoading}
            disabled={isDisabled}
            type={type}
            color={color}
            style={[gs.mb_1]}
          >
            {content}
          </Button>
        )}
        {shape === "circle" && (
          <>
            <Button.Circle
              loading={isLoading}
              disabled={isDisabled}
              type={type}
              color={color}
              style={[gs.mb_1]}
            >
              <AntDesign
                name="gift"
                size={20}
                color={type === "solid" ? "#fff" : color}
              />
            </Button.Circle>
          </>
        )}
        {shape === "square" && (
          <>
            <Button.Square
              loading={isLoading}
              disabled={isDisabled}
              type={type}
              color={color}
              style={[gs.mb_1]}
            >
              <AntDesign
                name="gift"
                size={20}
                color={type === "solid" ? "#fff" : color}
              />
            </Button.Square>
          </>
        )}
      </View>
    </Layout>
  );
};

export default Buttons;
