import { useContext, useState } from "react";
import { dataContext } from "../../App";
import ChannelModal from "../ChannelModal";
import "./index.scss";

const Home = () => {
  const { channels } = useContext(dataContext);
  // 控制弹窗展示或隐藏的状态
  const [visible, setVisible] = useState(false);
  return (
    <div className="home">
      <div className="home-channels">
        <div className="list">
          {channels
            .filter((item) => item.selected)
            .map((item) => {
              return (
                <div className="item" key={item.id}>
                  {item.name}
                </div>
              );
            })}
        </div>
        <div className="more" onClick={() => setVisible(true)}>
          ≡
        </div>
      </div>
      <div className="content" />
      {/* 频道弹窗 */}
      <ChannelModal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default Home;
