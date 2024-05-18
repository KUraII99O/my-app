import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Cancelpage from "./Pages/Cancelpage";
import Createpage from "./Pages/Createpage";
import Registerpage from "./Pages/Registerpage";
import Updatepage from "./Pages/Updatepage";
import NavBar from "./components/Navbar";
import Signinpage from "./Pages/Signinpage";
import InvoicePage from "./Pages/InvoicePage";

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <h1 className="text-2xl font-bold">
          User Registration and Subscription Management
        </h1>
        <Routes>
          <Route path="/register" element={<Registerpage />} />
          <Route path="/create" element={<Createpage />} />
          <Route path="/update" element={<Updatepage />} />
          <Route path="/cancel" element={<Cancelpage />} />
          <Route path="/invoice" element={<InvoicePage />} />
                <Route path="/sign-in" element={<Signinpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
