import React from "react";
import { Button, View } from "react-native";

import ArrowUp from "../assets/svg/ArrowUp";
import Container from "../component/Layout/Container";
import SingleProgress from "../component/Graphs/SingleProgress/SingleProgress";
import { useConfig } from "../ConfigProvier/ConfigProvider";

const Home = () => {
  const { setDirection, setTheme, direction, scheme } = useConfig();
  return (
      <Container>
        <View
          style={{
            marginBottom: 24,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            title={scheme as string}
            onPress={() => setTheme(scheme === "light" ? "dark" : "light")}
          />
          <Button
            title={direction}
            onPress={() => setDirection(direction === "ltr" ? "rtl" : "ltr")}
          />
        </View>
        <SingleProgress
          color={"#FF575F"}
          title={"Weekly Progress"}
          icon={<ArrowUp />}
          percent={15}
        />
      </Container>
  );
};

export default Home;
