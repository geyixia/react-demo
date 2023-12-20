import "./index.scss";

const ChannelHeader = ({ title, info, isEdit, setIsEdit }) => {
  return (
    <div className="channelHeader">
      <div className="header">
        <span>{title}</span>
        <span className="headerDesc">{info}</span>
      </div>
      {
        <span
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {isEdit ? "完成" : "编辑"}
        </span>
      }
    </div>
  );
};

export default ChannelHeader;
