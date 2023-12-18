import "./index.scss";

import Header from "./component/Header";

import Add from "./component/Add";
import InputDiv from "./component/Input/index";

const App = () => {
  return (
    <div className="cataList">
      <Header></Header>
      <Add></Add>
      <InputDiv />
      App
    </div>
  );
};

export default App;
