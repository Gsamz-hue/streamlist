import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import "../App.css"; // ✅ Corrected path to App.css (Moves one level up)

const StreamList = () => {
  const [input, setInput] = useState("");
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (input.trim() !== "") {
      setEvents([...events, { text: input, completed: false, id: Date.now() }]);
      setInput(""); // Clear input field after adding
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleComplete = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
  };

  const handleEdit = (id) => {
    const newText = prompt("Edit event:", events.find(event => event.id === id)?.text);
    if (newText !== null) {
      setEvents(
        events.map((event) =>
          event.id === id ? { ...event, text: newText } : event
        )
      );
    }
  };

  return (
    <div className="container">
      <h1>StreamList User Events</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an event..."
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <ul>
        {events.map((event) => (
          <li key={event.id} className={event.completed ? "completed" : ""}>
            <span>{event.text}</span>
            <div className="buttons">
              <button onClick={() => handleEdit(event.id)} className="edit-btn">
                <FaEdit />
              </button>
              <button onClick={() => handleComplete(event.id)} className="complete-btn">
                <FaCheck />
              </button>
              <button onClick={() => handleDelete(event.id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
