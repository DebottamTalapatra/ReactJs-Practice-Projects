import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [map, setMap] = useState(new Map());

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0) {
        setMap(new Map(parsed));
      }
    }
  }, []);

  useEffect(() => {
    if (map.size > 0) {
      localStorage.setItem("tasks", JSON.stringify([...map]));
    }
  }, [map]);

  function addTask(e) {
    e.preventDefault();
    if (input === "") {
      alert(`Enter a task to add!`);
      return;
    }
    if (map.has(input)) {
      alert("Task already exists! Add something new!");
      return;
    }
    const newMap = new Map(map);
    newMap.set(input, "NEW TASK ADDED");

    setMap(newMap);
    setInput("");
  }

  function deleteTask(key) {
    const newMap = new Map(map);
    newMap.delete(key);

    setMap(newMap);
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <label>Enter a new task!</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="eg.Do my Homework!"
        />
        <button type="submit">ADD</button>
      </form>
      <div className="task-region">
        {[...map].map(([key, value]) => (
          <div key={key} className="hehe">
            {key}
            <button onClick={() => deleteTask(key)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
