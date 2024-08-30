import React from "react";
import styles from "../Styles/DailyWeather.module.css";
import fonts from "../Styles/Fonts.module.css";
import { IoWater } from "react-icons/io5";

function DailyWeather(props) {
  return (
    <div className={styles.div}>
      <h1 className={fonts["roboto-medium"]}>{props.day}</h1>
      <aside>
        <p className={fonts["roboto-regular"]}>
          <IoWater className={styles.droplet} /> {props.precipitation}%
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${props.src}@2x.png`}
          alt={props.alt}
        />
        <p className={fonts["roboto-medium"]}>{props.high}&deg;</p>
        <p className={fonts["roboto-medium"]}>{props.low}&deg;</p>
      </aside>
    </div>
  );
}

export default DailyWeather;
