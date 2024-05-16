import { useContext } from "react";
import styles from "./ToDoItem.module.css";
import { ItemContext } from "../store/item-store";
const ToDoItem = ({ itemName, itemDate }) => {
  const { handleDelete } = useContext(ItemContext);

  return (
    <>
      <div className={`${styles.tal} col-6`}>{itemName}</div>
      <div className={`${styles.tal} col-4`}>{itemDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(itemName)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default ToDoItem;
