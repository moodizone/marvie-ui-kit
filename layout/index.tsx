import * as React from "react";

import Container from "../component/Layout/Container";
import ControlButtons from "./ControlButtons";
import { useConfig } from "../config";

const Layout: React.FC = ({ children }) => {
  const { colors } = useConfig();
  return (
    <Container style={{ backgroundColor: colors.primary.iv }}>
      <ControlButtons />
      {children}
    </Container>
  );
};

export default Layout;
