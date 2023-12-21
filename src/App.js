import "./index.scss";
import { useEffect, useState } from "react";

import Header from "./component/Header";

import Add from "./component/Add";
import InputDiv from "./component/Input/index";
import Content from "./component/Content/index";

import Home from "./views/Home/index";

import { createContext } from "react";
import axios from "axios";
import ReduxDemo from "./views/reduxDemo/index";

const dataContext = createContext();

const App = () => {
  const [channels, setChannels] = useState([]);
  const loadDate = async () => {
    const res = await axios.get("http://localhost:8080/channels");
    setChannels(res.data);
  };
  useEffect(() => {
    loadDate();
  }, []);
  const addSelect = async (item) => {
    await axios.patch(`http://localhost:8080/channels/${item.id}`, {
      selected: !item.selected,
    });
    loadDate();
  };
  return (
    <div className="cataList">
      {/* <Header></Header> */}
      {/* <Add></Add> */}
      {/* <InputDiv /> */}
      {/* <Content /> */}
      <dataContext.Provider value={{ channels, addSelect }}>
        <Home />
      </dataContext.Provider>
      <ReduxDemo></ReduxDemo>
    </div>
  );
};

export default App;

export { dataContext };
