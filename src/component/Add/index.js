import { useState } from "react";

import classnames from "classnames";

import "./index.scss";

const Add = () => {
  const [count, setCount] = useState(10);
  const AddCount = () => {
    setCount(count + 1);
  };
  // 使用classnames
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("small");

  return (
    <div>
      <h1>计数器：{count}</h1>
      {/* disabled && "btn-disabled"处理单个类名 */}
      <button
        className={classnames("btn", disabled && "btn-disabled")}
        onClick={AddCount}
      >
        计数 +1
      </button>
      {/* 处理多个类名 */}
      <button
        className={classnames("btn", {
          "btn-disabled": disabled,
          "btn-small": size === "small",
          "btn-large": size === "large",
        })}
        onClick={AddCount}
      >
        计数 +1
      </button>
      <div>
        <br />
        操作
        <button onClick={() => setDisabled(true)}> 禁用</button>
        <button onClick={() => setSize("large")}> 变大</button>
        <button onClick={() => setSize("small")}> 变小</button>
        <br />
      </div>
    </div>
  );
};

export default Add;
