import "./index.scss";
import Child1 from "./child1/index";
import Child2 from "./child2/index";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
const ContextTest = createContext();

const Content = () => {
  const [childList, setChildList] = useState(list);
  const [item, setItem] = useState("学习");
  const loadDate = async () => {
    const res = await axios.get("http://localhost:8080/todo");
    const list = res.data.map((item) => {
      return {
        id: item.id,
        name: item.text,
        class: item.done,
      };
    });
    setChildList(list);
  };
  useEffect(() => {
    // 初始化调取接口
    loadDate();
  }, []);
  useEffect(() => {
    console.log("初始化创建执行", item);
    return () => {
      console.log("组件卸载执行", item);
    };
  }, [item]); // [item] 值变化时执行

  const changeList = async (item) => {
    setItem(item.name);
    await axios.patch(`http://localhost:8080/todo/${item.id}`, {
      done: !item.class,
    });
    loadDate();
    // const list = childList.map((obj) => {
    //   if (obj.id === item.id) {
    //     obj.class = !obj.class;
    //   }
    //   return obj;
    // });
    // setChildList(list);
  };
  const [colors, setColors] = useState("#1677ff");
  return (
    <div className="content">
      <ContextTest.Provider value={{ colors }}>
        <input
          type="color"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
        <Child1 childList={childList} changeList={changeList} />
        <Child2 item={item} />
      </ContextTest.Provider>
    </div>
  );
};

export default Content;

export { ContextTest };
