import "./index.scss";
import Child1 from "./child1/index";
import Child2 from "./child2/index";
import { useState } from "react";

const list = [
  {
    id: 1,
    name: "学习",
    class: true,
  },
  {
    id: 2,
    name: "睡觉",
    class: false,
  },
];
const Content = () => {
  const [childList, setChildList] = useState(list);
  const [item, setItem] = useState("学习");
  const changeList = (item) => {
    setItem(item.name);
    const list = childList.map((obj) => {
      if (obj.id === item.id) {
        obj.class = !obj.class;
      }
      return obj;
    });
    setChildList(list);
  };
  return (
    <div className="content">
      <Child1 childList={childList} changeList={changeList} />
      <Child2 item={item} />
    </div>
  );
};

export default Content;
