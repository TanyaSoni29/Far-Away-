import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some Items on Your Packing List🚀</em>
      </p>
    );
  const numItem = items.length;
  const numPackedItem = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPackedItem / numItem) * 100);
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
