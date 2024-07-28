import React from "react";

function Item({ item, setItems }) {
  const handleDeleteItem = (id) => {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const handleTogleItem = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleTogleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          handleDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default Item;
