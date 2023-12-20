import "../index.scss";
import Menu from "./component/menu";

const child2 = ({ item }) => {
  return (
    <div>
      {item}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default child2;
