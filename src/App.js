import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import StreamList from "./components/StreamList";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to StreamList</h1>} />
          <Route path="/events" element={<StreamList />} />
          <Route path="/movies" element={<MovieSearch />} /> {/* ✅ Movies Route */}
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
