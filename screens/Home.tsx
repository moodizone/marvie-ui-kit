import React from "react";
import { Button, View } from "react-native";

import ArrowUp from "../assets/svg/ArrowUp";
import Container from "../component/Layout/Container";
import SingleProgress from "../component/Graphs/SingleProgress/SingleProgress";
import { useConfig } from "../ConfigProvier/ConfigProvider";
import RingProgress from "../component/Graphs/RingProgress";

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
        <View style={{marginBottom:24}}>
          <SingleProgress
            color={"#FF575F"}
            title={"Weekly Progress"}
            icon={<ArrowUp />}
            percent={15}
          />
        </View>
        <View style={{marginBottom:24}}>
         <RingProgress title={'Weekly Progress'} records={[
           {color:'#FF575F',title:'title 1',percent:30},
           {color:'#ffbc25',title:'title 2',percent:30},
           {color:'#25c685',title:'title 3',percent:30},
         ]}/>
       </View>
      </Container>
  );
};

export default Home;
