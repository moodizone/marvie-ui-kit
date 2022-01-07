import * as React from "react";

import Container from "../component/Layout/Container";
import ControlButtons from "./ControlButtons";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <ControlButtons />
      {children}
    </Container>
  );
};

export default Layout;
