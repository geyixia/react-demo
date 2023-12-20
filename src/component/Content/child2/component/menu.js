import { useContext } from "react";
import { ContextTest } from "../../../Content";

const Menu = () => {
  const { colors } = useContext(ContextTest);
  return <button style={{ color: colors }}>菜单</button>;
};
export default Menu;
