import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<UserForm />} />
      <Route path="/edit/:id" element={<UserForm />} />
    </Routes>
  </Router>
);

export default App;
