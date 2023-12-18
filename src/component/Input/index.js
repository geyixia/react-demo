import "./index.scss";
import { useState } from "react";

const InputDiv = () => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* value和onChange必须同时出现 */}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        获取
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
