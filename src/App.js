import { useState } from "react";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
export default function App() {
  const [items, setItems] = useState([]);

  function handelAdded(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    let check = window.confirm("Are you sure you want to delete all items?");
    if (check) setItems([]); // to Clear the list set The Items to empty list
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdded={handelAdded} />
      <PackingList
        items={items}
        onDelete={handelDeleteItem}
        onToggle={handelToggle}
        onClear={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}
