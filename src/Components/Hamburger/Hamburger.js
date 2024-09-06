import styles from "./Hamburger.module.css";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.js";

function Hamburger(props) {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const toggleHamburger = (e) => setHamburgerClicked(!hamburgerClicked);

  return (
    <div
      className={`${styles.hamburger} ${hamburgerClicked ? styles.active : ""}`}
      onClick={toggleHamburger}
    >
      <span></span>
      <span></span>
      <span></span>
      <Sidebar
        isOpen={hamburgerClicked}
        items={[
          {
            href: "/about",
            text: "About",
          },
          {
            href: "/weather",
            text: "Weather",
          },
          {
            href: "/register",
            text: "Sign up",
          },
        ]}
      />
    </div>
  );
}

export default Hamburger;
