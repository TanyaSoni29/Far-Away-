import Form from "./components/Form";
import Logo from "./components/Logo";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackagingList items = {items} setItems = {setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
