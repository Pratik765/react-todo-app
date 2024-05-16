import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ItemContext } from "../store/item-store";
const ToDoItems = () => {
  const { itemArr } = useContext(ItemContext);

  return (
    <>
      <div className="container">
        <div className="row">
          {itemArr.map((item, key) => {
            return (
              <ToDoItem itemName={item.name} itemDate={item.date} key={key} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ToDoItems;
