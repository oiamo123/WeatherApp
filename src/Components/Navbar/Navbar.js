import styles from "./Navbar.module.css";
import React from "react";
import Hamburger from "../Hamburger/Hamburger.js";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useVerify from "../../hooks/useVerify.js";

function Navbar(props) {
  const navigate = useNavigate();

  // const checkAuth = async () => {
  //   const isAuthenticated = await useVerify();
  //   if (isAuthenticated) {
  //     navigate("/account");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  return (
    <nav className={styles.nav}>
      <Hamburger />
      {/* <IoPerson onClick={checkAuth} /> */}
    </nav>
  );
}

export default Navbar;
