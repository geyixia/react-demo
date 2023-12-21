import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/couter";
import channelReducer from "./modules/channel";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  },
});

export default store;
