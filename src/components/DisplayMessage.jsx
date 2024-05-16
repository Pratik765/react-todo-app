import { useContext } from "react";
import { ItemContext } from "../store/item-store";

const DisplayMessage = () => {
  const { itemArr } = useContext(ItemContext);
  return <>{itemArr.length === 0 && <h2>Enjoy your day</h2>}</>;
};
export default DisplayMessage;
