import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channeLiist: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channeLiist = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;
// 异步请求部分
const url = "http://geek.itheima.net/v1_0/channels";

const fetchChannList = () => {
  return async (dispatch) => {
    const res = await axios.get(url);
    dispatch(setChannels(res.data.data.channels));
  };
};

// 获取reducer函数
const channelReducer = channelStore.reducer;

export default channelReducer;

export { fetchChannList };
