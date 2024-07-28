import React, { useState } from "react";

function Form({setItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); we have add these new items in Packaging List component so that we have to lift up this State in Parent Component of these Packaging and form component in order to use this state in both form and packaging component both 

  const handleAddItems = (item) => {
    setItems((currentItem) => [...currentItem, item]);
  };

  // here we are not using push method because push method mutate the items array and we know that react is Immutable and react will not allow us to use this push method

  const submitForm = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
   
    handleAddItems(newItem);
    

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={submitForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* as e.target.value is a string that's why we are converting it*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="...Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

//we can submit form by another method also if we apply OnClick on button then call handleSubmit then in that case it will only be submit when user click on the button but if we want form will submit in Pressing Enter Key in keyboard then we Should use Above Method because Html Method have that functioning inbuilt

// to know the value which is typed in input box we can take it directly using e.target.value as e is an object if you do console.log(e) but in React we never do this ... if we are using e.target.value this is happening because html maintain form state in its(inside) Dom by default but this make hard to read value and it also leave their state inits Dom which is for many reason is not ideal that's why we use COntrolled Elemnt so that in react we can place all state of form in one place inside the React Application not in inside the Dom in order to this we use a Controlled technique Contorlled element with this technique react control and own the state of these input fields
