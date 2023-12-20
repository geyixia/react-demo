import classNames from "classnames";
import ChannelItem from "../ChannelItem";
import "./index.scss";
import ChannelHeader from "../ChannelHeader";
import { useContext, useState } from "react";
import { dataContext } from "../../App";

const ChannelModal = ({ visible, onClose }) => {
  const { channels } = useContext(dataContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isnoEdit, setIsnoEdit] = useState(false);
  return (
    <div className="channels" style={{ display: visible ? "block" : "none" }}>
      <div className="header">
        <span>全部板块</span>
        <span className="close" onClick={onClose}>
          x
        </span>
      </div>
      <div className="content">
        <ChannelHeader
          title="我的板块"
          info="点击进入板块"
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
        <div className={classNames("list", false && "edit")}>
          {channels
            .filter((item) => item.selected)
            .map((item) => {
              return (
                <ChannelItem
                  name={item.name}
                  key={item.id}
                  item={item}
                  isEdit={isEdit}
                />
              );
            })}
        </div>

        <ChannelHeader
          title="更多板块"
          setIsEdit={setIsnoEdit}
          isEdit={isnoEdit}
          info="点击添加板块"
        />
        <div className="list">
          {channels
            .filter((item) => !item.selected)
            .map((item) => {
              return (
                <ChannelItem
                  name={item.name}
                  isEdit={isnoEdit}
                  key={item.id}
                  item={item}
                />
              );
            })}
          {channels.filter((item) => !item.selected).length === 0 && (
            <div className="no-more">已全部添加至我的板块</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelModal;
