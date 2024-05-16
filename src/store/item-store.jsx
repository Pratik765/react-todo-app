import { createContext, useReducer } from "react";
export const ItemContext = createContext({
  itemArr: [],
  handleNewItem: () => {},
  handleDelete: () => {},
});
const todoItemsReducer = (currState, action) => {
  let newTodoItems = currState;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currState,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currState.filter((value) => {
      value.name !== action.payload.itemName;
    });
  }
  return newTodoItems;
};
const ItemContextProvider = ({ children }) => {
  const [itemArr, dispatch] = useReducer(todoItemsReducer, []);
  const handleNewItem = (name, date) => {
    const addItem = {
      type: "ADD_ITEM",
      payload: {
        name,
        date,
      },
    };
    dispatch(addItem);
  };
  const handleDelete = (itemName) => {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: { itemName },
    };
    dispatch(deleteItem);
  };
  return (
    <ItemContext.Provider value={{ itemArr, handleNewItem, handleDelete }}>
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider;
