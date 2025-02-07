import React, { useState } from "react";

function StreamList() {
  const [stream, setStream] = useState("");
  const [streamList, setStreamList] = useState([]);

  const handleAddStream = () => {
    if (stream.trim() !== "") {
      setStreamList([...streamList, stream]);
      setStream("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>StreamList</h2>
      <input
        type="text"
        value={stream}
        placeholder="Add a movie or program..."
        onChange={(e) => setStream(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleAddStream} style={{ padding: "5px 10px" }}>
        Add
      </button>
      <ul style={{ marginTop: "20px" }}>
        {streamList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
