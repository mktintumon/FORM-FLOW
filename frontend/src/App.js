import "./App.css";
import AadharForm from "./components/AadharForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResidenceForm from "./components/ResidenceForm";
import LearnersForm from "./components/LearnersForm";
import Login from "./components/Login";
import Qrcode from "./components/Qrcode";
import LoginOtp from "./components/LoginOtp";
import Verify from "./components/Verify";
import AdminConsole from "./components/AdminConsole";
import UserConsole from "./components/UserConsole";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") != null
  );

  const [isAdmin, setAdmin] = useState(localStorage.getItem("admin") != null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Landing />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/loginotp" element={<LoginOtp />} />
          <Route path="/verify/:paramEmail" element={<Verify />} />

          <Route path="/home" element={isLoggedIn ? <Home /> : <Login />} />
          <Route
            path="/aadharForm"
            element={isLoggedIn ? <AadharForm /> : <Login />}
          />
          <Route
            path="/residenceForm"
            element={isLoggedIn ? <ResidenceForm /> : <Login />}
          />
          <Route
            path="/learnerForm"
            element={isLoggedIn ? <LearnersForm /> : <Login />}
          />

          <Route
            path="/userConsole"
            element={isLoggedIn ? <UserConsole /> : <Login />}
          />

          {isLoggedIn && isAdmin && (
            <Route path="/admin" element={<AdminConsole />} />
          )}


          {isLoggedIn && !isAdmin && (
            <Route path="/userConsole" element={<UserConsole />} />
          )}

          {!isLoggedIn && <Route path="/login" element={<Login />} />}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/admindata" element={<AdminData />} /> */
}
