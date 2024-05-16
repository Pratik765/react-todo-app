import { useContext, useRef } from "react";
import styles from "./Inputs.module.css";
import { ItemContext } from "../store/item-store";

const Inputs = () => {
  const nameValue = useRef();
  const dateValue = useRef();

  const { handleNewItem } = useContext(ItemContext);
  const handleChange = (event) => {
    event.preventDefault();
    const name = nameValue.current.value;
    const date = dateValue.current.value;
    nameValue.current.value = "";
    dateValue.current.value = "";
    handleNewItem(name, date);
  };
  return (
    <>
      <div className="container my-4">
        <form className="row" onSubmit={handleChange}>
          <div className="col-6">
            <input type="text" ref={nameValue} placeholder="Enter ToDo" />
          </div>
          <div className="col-4">
            <input type="date" ref={dateValue} />
          </div>
          <div className="col-2">
            <button className={`${styles.minWidth} btn btn-success`}>
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Inputs;
