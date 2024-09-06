import React from "react";
import styles from "./ConditionsCard.module.css";
import fonts from "../../assets/Fonts.module.css";

function ConditionsCard(props) {
  return (
    <div className={styles.div}>
      <h3 className={fonts["roboto-medium"]}>
        {props.icon} {props.condition}
      </h3>
      <p className={fonts["roboto-regular"]}>{props.value}</p>
    </div>
  );
}

export default ConditionsCard;
