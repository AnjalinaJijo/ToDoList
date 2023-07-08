import React, { useState } from "react";

function App() {
  const [Item, setItem] = useState("");
  const [ItemsArray, setItemsArray] = useState([]);

  function handleOnChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setItemsArray((prevItems) => {
      return [...prevItems, Item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" value={Item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {ItemsArray.map((EachItem) => (
            <li>{EachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
