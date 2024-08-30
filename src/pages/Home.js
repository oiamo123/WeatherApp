import React, { useState, useEffect } from "react";
import styles from "../Styles/Home.module.css";
import fonts from "../Styles/Fonts.module.css";
import LinkButton from "../Components/LinkButton.js";
import CurrentWeather from "../Components/CurrentWeather.js";
import SmallCard from "../Components/SmallCard.js";
import Weather from "../Components/Weather.js";

function Home(props) {
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [current, setCurrent] = useState(null);

  return (
    <article className={styles.article}>
      <h1 className={`${fonts["roboto-light"]} ${styles.h1}`}>
        Welcome to Weathalert
      </h1>
      <Weather />
      <aside className={styles.about}>
        <SmallCard
          title="Updates"
          para="Get immediate texts for weather updates tailored to you"
        />
        <SmallCard
          title="Customizable"
          para="Choose the days, time and conditions you want to be notified of"
        />
        <SmallCard
          title="Flexible"
          para="Easily make changes to your notifications"
        />
      </aside>
      <LinkButton text="Learn more" style="secondary" href="about" />
      <LinkButton text="Start now" style="primary" href="register" />
    </article>
  );
}

export default Home;
