import React, { useState } from "react";
import Item from "./Item";

function PackagingList({ items, setItems }) {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  //   { id: 2, description: "Charger", quantity: 1, packed: false },
  // ];
  const [sortBy, setSortBy] = useState("input"); // initial value is value attribute of option

  // for Shorting items on Basis of sort criteria so we will make copy of items array then we update that copy we doesn't change the original items array that state would remain unChange as sort operation mutate the original array

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if(sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
    if(sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed) )




const handleClearBtn = () => {
  const confirmed = window.confirm("Are You Sure You Want to delete all List items?");
  if (confirmed) setItems([])
}

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearBtn}>Clear All</button>
      </div>
    </div>
  );
}

export default PackagingList;
