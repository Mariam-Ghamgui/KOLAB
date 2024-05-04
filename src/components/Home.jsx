import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Calendar from "./Calendar";
import Tasks from "../components/Tasks";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="calendar">Calendar</Link>
          </li>
          <li>
            <Link to="tasks">Tasks</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default Home;
