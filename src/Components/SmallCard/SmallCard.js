import React from "react";
import styles from "./SmallCard.module.css";
import fonts from "../../assets/Fonts.module.css";

function SmallCard(props) {
  return (
    <div className={styles.div}>
      <h1 className={fonts["roboto-regular"]}>{props.title}</h1>
      <p className={fonts["roboto-thin"]}>{props.para}</p>
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default SmallCard;
