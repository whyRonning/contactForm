import React from "react";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Leto', sans-serif ;
    font-size: 2vmin;
    margin: 0;
    padding: 0;
  }
  button {
    font-size: 2vmin;
    height: 7vh;
    border-radius: 44px;
    border:none;
    transition: .4s ease;
    background-color: #13C98A;
    text-align: center;
    color: #FFFFFF;
    font-family: 'LetoButt', sans-serif;
    &:hover {
      background-color: #2E09B6
    }
  }
  @font-face {
    font-family: "LetoButt";
    src: url("./fonts/LetoSans-Bold.ttf") format("ttf");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "LetoAll";
    src: url("./fonts/LetoSans-Bold.ttf") format("ttf");
    font-style: normal;
    font-weight: normal;
  }

`;
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
