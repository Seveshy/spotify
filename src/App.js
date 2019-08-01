import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import "./config/reactotron";

import { Wrapper, Content, Container } from "./styles/components";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
