import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import Routes from "./routes";

import { Wrapper, Content, Container } from "./styles/components";

import "./styles/global";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  </BrowserRouter>
);

export default App;
