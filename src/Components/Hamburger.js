import styles from "../Styles/Hamburger.module.css";
import React from "react";
import { useState } from "react";

function Hamburger(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <div
      className={`${styles.hamburger} ${hamburgerOpen ? styles.active : ""}`}
      onClick={toggleHamburger}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
