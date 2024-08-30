import styles from "../Styles/Navbar.module.css";
import React, { useState } from "react";
import Hamburger from "./Hamburger.js";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import verify from "../Authentication/Verify.js";

function Navbar(props) {
  const navigate = useNavigate();

  const checkAuth = async () => {
    const isAuthenticated = await verify();
    if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className={styles.nav}>
      <IoPerson onClick={checkAuth} />
      <Hamburger />
    </nav>
  );
}

export default Navbar;
