import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>My To Do List</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "1rem" }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter an item"
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={addItem} style={{ padding: "0.5rem 1rem" }}>
          Add
        </button>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "#eee",
              borderRadius: "8px",
              marginBottom: "0.5rem",
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => removeItem(index)}
              style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.5rem 1rem" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
