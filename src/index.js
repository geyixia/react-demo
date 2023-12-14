import { createRoot } from "react-dom/client";

// 创建react根对象
const root = createRoot(document.querySelector("#root"));

root.render(
  <div>
    <h1>Hello jsx</h1>
    <img
      className=""
      src="http://150.223.2.73:9103/api/file/view/6587e37c-e664-4088-91d0-9a76f7656264.png"
      alt="hha"
    />
  </div>
);
