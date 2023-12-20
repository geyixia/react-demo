import classNames from "classnames";
import "./index.scss";
import { useContext } from "react";
import { dataContext } from "../../App";

const ChannelItem = ({ name, className, item, isEdit }) => {
  const { addSelect } = useContext(dataContext);
  return (
    <div
      className={classNames("channel-item", className, isEdit && "more-item")}
    >
      {name}
      <span
        className="icon"
        onClick={() => {
          addSelect(item);
        }}
      >
        +
      </span>
    </div>
  );
};

export default ChannelItem;
