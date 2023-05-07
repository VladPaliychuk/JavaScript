import React, { useState } from "react";

function ListItem({ text, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(text);
  
    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
  
    function handleInputBlur() {
      setIsEditing(false);
      onEdit(inputValue);
    }
  
    function handleEditClick() {
      setIsEditing(true);
    }
  
    return (
      <li>
        {isEditing ? (
          <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} />
        ) : (
          <>
            <span>{text}</span>
            <button onClick={handleEditClick}>редагувати</button>
          </>
        )}
      </li>
    );
  }
  
  function List({ items }) {
    const [listItems, setListItems] = useState(items);
  
    function handleItemEdit(index, newText) {
      const newItems = [...listItems];
      newItems[index] = newText;
      setListItems(newItems);
    }
  
    return (
      <ul>
        {listItems.map((item, index) => (
          <ListItem key={index} text={item} onEdit={(newText) => handleItemEdit(index, newText)} />
        ))}
      </ul>
    );
  }
  
  function App() {
    const items = ["first", "second", "third"];
    return <List items={items} />;
  }
  
  export default App;