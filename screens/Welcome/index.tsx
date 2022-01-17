import * as React from "react";
import { Button, Shape, Typography, useConfig, TextInput } from "../../lib";
import Layout from "../../layout";
import { ColorValue, StyleSheet, TextStyle, View } from "react-native";
import { useAppTranslation } from "../../locales/TranslationProvider";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

const Welcome = () => {
  const { t } = useAppTranslation();
  const { gs, colors, direction } = useConfig();
  const grayText: TextStyle = { color: colors.secondary.ii as ColorValue };
  const [isPassword, setIsPassword] = React.useState<boolean>(true);

  return (
    <Layout>
      <View style={[gs.row, gs.mb_3]}>
        <Shape.Square
          dimension={45}
          style={{ backgroundColor: colors.primary.i }}
        />
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Title level={1}>{t("welcome")}!</Typography.Title>
      </View>
      <View style={[gs.mb_3]}>
        <Typography.Text style={[grayText, styles.signIn]}>
          {t("signInToContinue")}!
        </Typography.Text>
      </View>
      <View style={[gs.mb_3, gs.row, gs.acenter]}>
        <View style={[gs.static]}>
          <Shape.Square
            style={[gs.mr_1, { backgroundColor: colors.yellow.iii }]}
            dimension={36}
          >
            <FontAwesome5 name="user-alt" size={16} color={colors.yellow.ii} />
          </Shape.Square>
        </View>
        <View style={[gs.dynamic]}>
          <TextInput
            placeholder={t("username")}
            style={grayText}
            placeholderTextColor={colors.secondary.ii}
          />
        </View>
      </View>
      <View style={[gs.mb_3, gs.row, gs.acenter]}>
        <View style={[gs.static]}>
          <Shape.Square
            style={[gs.mr_1, { backgroundColor: colors.red.iii }]}
            dimension={36}
          >
            <FontAwesome5 name="lock" size={16} color={colors.red.ii} />
          </Shape.Square>
        </View>
        <View style={[gs.dynamic]}>
          <TextInput
            icon={
              isPassword ? (
                <Feather name="eye-off" size={18} color={colors.secondary.ii} />
              ) : (
                <Feather name="eye" size={18} color={colors.secondary.ii} />
              )
            }
            iconOnPress={() => setIsPassword((prevState) => !prevState)}
            secureTextEntry={isPassword}
            placeholder={t("password")}
            style={grayText}
            placeholderTextColor={colors.secondary.ii}
          />
        </View>
      </View>
      <View>
        <Button>
          <Typography.Title style={[gs.mr_1, { color: "#fff" }]}>
            {t("signIn")}
          </Typography.Title>
          <AntDesign
            name={direction === "ltr" ? "arrowright" : "arrowleft"}
            size={18}
            color="#fff"
          />
        </Button>
      </View>
      <View style={[gs.mt_2, gs.mb_3]}>
        <Typography.Link
          style={[gs.textCenter, grayText, { textDecorationLine: "none" }]}
        >
          {t("forgotPassword")}
        </Typography.Link>
      </View>
      <View style={[gs.mt_3]}>
        <Button style={{ backgroundColor: colors.green.iii }}>
          <Typography.Title style={[{ color: colors.green.ii }]}>
            {t("createAnAccount")}
          </Typography.Title>
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  signIn: { fontSize: 24 },
});

export default Welcome;
