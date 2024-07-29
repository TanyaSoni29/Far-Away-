import React from "react";

function Stats({ items }) {
  console.log(items)
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some Items on Your Packing List🚀</em>
      </p>
    );
  const numItem = items.length;
  const numPackedItem = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPackedItem / numItem) * 100); // this is the concept Based on Derived State -- Derived State means do not make separate state which can be calculated with existing State 
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈"
          : `💼You have ${numItem} items on your list, and you already packed
        ${numPackedItem} ${packedPercent}% 💼`}
      </em>
    </footer>
  );
}

export default Stats;
