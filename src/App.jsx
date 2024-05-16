import ToDoHeading from "./components/ToDoHeading";
import Inputs from "./components/Inputs";
import ToDoItems from "./components/ToDoItems";
import DisplayMessage from "./components/DisplayMessage";
import ItemContextProvider from "./store/item-store";

function App() {
  return (
    <ItemContextProvider>
      <center className="main-container">
        <ToDoHeading />
        <Inputs />
        <DisplayMessage />
        <ToDoItems />
      </center>
    </ItemContextProvider>
  );
}

export default App;
