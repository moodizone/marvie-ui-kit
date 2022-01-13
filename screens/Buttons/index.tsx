import * as React from "react";
import { Switch, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Layout from "../../layout";
import { Button, Shape } from "../../lib";
import { useConfig } from "../../config";
import { Colors } from "../../style/type";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { Typography } from "../../lib";

type ShapeType = "regular" | "square" | "circle";

const Buttons = () => {
  const { gs, colors } = useConfig();
  const { t } = useAppTranslation();
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<Colors>("red");
  const [shape, setShape] = React.useState<ShapeType>("regular");

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
        <View style={[gs.row, gs.mb_1, gs.wrap]}>
          {["red", "orange", "yellow", "green", "blue", "purple"].map((c) => (
            <TouchableOpacity
              onPress={() => setColor(c as Colors)}
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
          <>
            <Button
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={"#fff"} />}
              title={t("weeklyProgress")}
              titleStyles={{ textTransform: "uppercase" }}
              type={"solid"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              title={t("weeklyProgress")}
              type={"outlined"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              title={t("weeklyProgress")}
              type={"ghost"}
              color={color}
              style={[gs.mb_1]}
            />
          </>
        )}
        {shape === "circle" && (
          <>
            <Button.Circle
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={"#fff"} />}
              type={"solid"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button.Circle
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              type={"outlined"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button.Circle
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              type={"ghost"}
              color={color}
              style={[gs.mb_1]}
            />
          </>
        )}
        {shape === "square" && (
          <>
            <Button.Square
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={"#fff"} />}
              type={"solid"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button.Square
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              type={"outlined"}
              color={color}
              style={[gs.mb_1]}
            />
            <Button.Square
              loading={isLoading}
              disabled={isDisabled}
              icon={<AntDesign name="gift" size={20} color={colors[color].i} />}
              type={"ghost"}
              color={color}
              style={[gs.mb_1]}
            />
          </>
        )}
      </View>
    </Layout>
  );
};

export default Buttons;
