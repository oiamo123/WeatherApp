import React from "react";
import styles from "../Styles/HourlyWeather.module.css";
import fonts from "../Styles/Fonts.module.css";
import { IoWater } from "react-icons/io5";

function HourlyWeather(props) {
  return (
    <div className={styles.div}>
      <p className={fonts["roboto-medium"]}>{props.time}</p>
      <img
        src={`https://openweathermap.org/img/wn/${props.src}@2x.png`}
        alt={props.alt}
      />
      <p className={fonts["roboto-medium"]}>{props.temperature}&deg;</p>
      <p className={fonts["roboto-regular"]}>
        <IoWater className={styles.droplet} /> {props.precipitation}%
      </p>
    </div>
  );
}

export default HourlyWeather;
