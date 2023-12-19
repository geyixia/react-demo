import "./index.scss";

import Header from "./component/Header";

import Add from "./component/Add";
import InputDiv from "./component/Input/index";
import Content from "./component/Content/index";

const App = () => {
  return (
    <div className="cataList">
      <Header></Header>
      {/* <Add></Add> */}
      {/* <InputDiv /> */}
      <Content />
    </div>
  );
};

export default App;
