import React from "react";
import styles from "../Styles/Button.module.css";
import fonts from "../Styles/Fonts.module.css";

function LinkButton(props) {
  return (
    <a
      className={`${fonts["roboto-regular"]} ${styles[props.style]} ${
        styles.button
      }`}
      type={props.type ? "submit" : "button"}
      href={props.href ? `${document.URL}${props.href}` : ""}
    >
      {props.text}
    </a>
  );
}

export default LinkButton;
