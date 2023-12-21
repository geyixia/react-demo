import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import store from "./store";

// 创建react根对象
const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
