import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import fonts from "../../assets/Fonts.module.css";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp, IoSearch } from "react-icons/io5";

function SideBar(props) {
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div
      className={`${styles.div} ${!props.isOpen ? styles["hidden"] : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        className={`${styles.input} ${
          searchOpen ? "" : styles["input-hidden"]
        }`}
      ></input>
      <div className={styles.buttons}>
        <button onClick={toggleSearch}>
          <IoSearch />
        </button>
        <button onClick={() => navigateTo("/account")}>
          <IoSettingsSharp />
        </button>
      </div>
      {props.items.map((item) => (
        <button
          className={fonts["roboto-medium"]}
          key={item.href}
          onClick={() => navigateTo(item.href)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}

export default SideBar;
