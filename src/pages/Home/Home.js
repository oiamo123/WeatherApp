import React from "react";
import styles from "./Home.module.css";
import Weather from "../../Components/Weather/Weather.js";
import Navbar from "../../Components/Navbar/Navbar.js";

function Home(props) {
  return (
    <article className={styles.article}>
      <Navbar />
      <Weather />
    </article>
  );
}

export default Home;
