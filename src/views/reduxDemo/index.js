import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
// 导入创建action对象的方法
import { addToNum, decrement, increment } from "../../store/modules/couter";
import { fetchChannList } from "../../store/modules/channel";
import { useEffect } from "react";
const ReduxDemo = () => {
  const { count } = useSelector((state) => state.counter);

  const { channeLiist } = useSelector((state) => state.channel);

  const dispatch = useDispatch();

  // 使用useeffect
  useEffect(() => {
    dispatch(fetchChannList());
  }, [dispatch]);
  return (
    <div>
      计数 {count}
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(addToNum(10));
        }}
      >
        addToNum To 10
      </button>
      <br />
      {channeLiist.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default ReduxDemo;
