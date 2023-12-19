import "../index.scss";
import classnames from "classnames";

const child1 = ({ childList, changeList }) => {
  return (
    <>
      {childList.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              changeList(item);
            }}
            className={classnames("child", item.class && "no-child")}
          >
            {item.name}
          </div>
        );
      })}
    </>
  );
};

export default child1;
