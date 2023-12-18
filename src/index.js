import { createRoot } from "react-dom/client";

import App from "./App";

// 创建react根对象
const root = createRoot(document.querySelector("#root"));

root.render(<App />);
