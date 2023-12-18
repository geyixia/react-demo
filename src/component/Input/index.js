import "./index.scss";
import { useRef, useState } from "react";

const InputDiv = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  // 创建ref对象并与jsx绑定 通过InputRef.current拿到dom对象
  // InputRef.current.value 拿到值
  // InputRef.current.focus() 获取焦点
  const InputRef = useRef(null);
  return (
    <div>
      {/* value和onChange必须同时出现 */}
      <input
        ref={InputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console.log(InputRef.current.value);
          InputRef.current.focus();
        }}
      >
        获取值与焦点
      </button>
      <button
        onClick={() => {
          setValue("修改了");
        }}
      >
        修改
      </button>
      <br />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked ? 111 : 222}

      <br />
    </div>
  );
};

export default InputDiv;
