import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Container from "../component/Layout/Container";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <SafeAreaView>
        <StatusBar />
        {children}
      </SafeAreaView>
    </Container>
  );
};

export default Layout;
