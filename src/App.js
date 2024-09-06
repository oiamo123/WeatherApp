import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import Account from "./pages/Account/Account.js";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Logout from "./pages/Logout/Logout.js";
import Register from "./pages/Register/Register.js";
import Verify from "./pages/Verify/Verify.js";
import About from "./pages/About/About.js";

function App() {
  // const [theme, setTheme] = useState("light");

  // const getTheme = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/account/theme", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     const data = await response.json();

  //     if (data) {
  //       setTheme(data.theme);
  //     } else {
  //       const defaultTheme = window.matchMedia("(prefers-color-scheme): dark");
  //       defaultTheme.matches ? setTheme("dark") : setTheme("light");
  //     }
  //   } catch (err) {
  //     console.log("Error fetching theme:", err);
  //     // fallback to default theme
  //     const defaultTheme = window.matchMedia("(prefers-color-scheme): dark");
  //     defaultTheme.matches ? setTheme("dark") : setTheme("light");
  //   }
  // };

  // useEffect(() => {
  //   getTheme();
  // }, []);

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
