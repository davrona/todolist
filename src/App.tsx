import React, { useEffect, useState } from 'react';

// eeslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import './App.css';

import AddItem from "./AddItem";
import ToDoList, { Item } from "./ToDoList";

const initialList = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

const isPartOf = (item: Item, items: Item[]): boolean => {
  return items.some((it) => it.priority === item.priority);
};

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems([...initialList])
  }, []);

  const addItem = (item: Item) => {
      if(isPartOf(item, items)) {
        alert(`Item with priorirty: ${item.priority} exists`);
        return;
      }
      setItems([...items, item])
  }

  return (
    <div className="App">
      <h1>hh i l</h1>
      <br />
      <AddItem addItem={addItem} />
      <br/>
      <ToDoList items={items} />
    </div>
  );
}

export default App;
