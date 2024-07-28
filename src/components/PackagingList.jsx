import React from "react";
import Item from "./Item";

function PackagingList({items, setItems}) {
  // const initialItems = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  //   { id: 2, description: "Charger", quantity: 1, packed: false },
  // ];

  return <div className="list">
    <ul>
      {items.map((item) => (
          <Item item={item} key={item.id} setItems={setItems}/>
      ))}
    </ul>
  </div>
}

export default PackagingList;
