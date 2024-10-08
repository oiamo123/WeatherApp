import React from "react";
import fonts from "../../assets/Fonts.module.css";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.div}>
      <label
        className={`${fonts["roboto-light"]} ${styles.label}`}
        htmlFor={props.name}
      >
        {props.text}
      </label>
      <input
        className={styles.input}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;
