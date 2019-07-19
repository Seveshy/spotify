import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import { Wrapper, Content } from "./styles/components";

import "./styles/global";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Sidebar />
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
