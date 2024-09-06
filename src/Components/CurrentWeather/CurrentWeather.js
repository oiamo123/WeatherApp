import React from "react";
import styles from "./CurrentWeather.module.css";
import fonts from "../../assets/Fonts.module.css";

function CurrentWeather(props) {
  return (
    <div className={styles.div}>
      <h3 className={fonts["roboto-regular"]}>{props.city}</h3>
      <h1 className={fonts["roboto-medium"]}>{props.temperature}&deg;</h1>
      <img
        src={`https://openweathermap.org/img/wn/${props.src}@2x.png`}
        alt={props.alt}
      ></img>
      <p className={fonts["roboto-regular"]}>{props.conditions}</p>
      <p className={fonts["roboto-regular"]}>
        High: {props.high}&deg; Low: {props.low}&deg;
      </p>
    </div>
  );
}

export default CurrentWeather;
