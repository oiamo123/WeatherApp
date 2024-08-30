import React, { useState, useEffect } from "react";
import styles from "../Styles/Weather.module.css";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";

function Weather(props) {
  const [hourly, setHourly] = useState(null);
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState(null);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    const success = function (pos) {
      const coords = pos.coords;

      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8000/api/weather", {
            method: "POST",
            body: JSON.stringify({
              lat: coords.latitude,
              lon: coords.longitude,
            }),
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          if (data) {
            console.log(data);
            setCurrent(data.current);
            setDaily(data.daily);
            setHourly(data.hourly);
          }
        } catch (err) {
          console.log("Failed to fetch weather data", err);
        }
      };

      fetchData();
    };

    const error = function (err) {
      console.log("Error retrieving location");
    };

    const location = navigator.geolocation.getCurrentPosition(
      success,
      error,
      options
    );
  }, []);

  return (
    <div className={styles.div}>
      {current ? (
        <CurrentWeather
          city="Calgary"
          temperature={Math.round(current.temp)}
          conditions={current.weather[0].main}
          src={current.weather[0].icon}
          high={Math.round(daily[0].temp.max)}
          low={Math.round(daily[0].temp.min)}
        />
      ) : (
        <p>Loading...</p>
      )}
      <aside className={styles.hourly}>
        {hourly ? (
          hourly.map((hour) => {
            const hours = new Date(hour.dt * 1000).getHours();
            const period = hours >= 12 ? "pm" : "am";
            const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
            const time = `${formattedHours}${period}`;

            return (
              <HourlyWeather
                time={time}
                src={hour.weather[0].icon}
                temperature={Math.round(hour.temp)}
                precipitation={hour.pop}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </aside>
      <aside className={styles.daily}>
        {daily ? (
          daily.map((day) => (
            <DailyWeather
              key={day.dt}
              day={
                new Date(day.dt * 1000).toDateString() ===
                new Date().toDateString()
                  ? "Today"
                  : new Intl.DateTimeFormat("en-US", {
                      weekday: "long",
                    }).format(new Date(day.dt * 1000))
              }
              precipitation={Math.round(day.pop)}
              src={day.weather[0].icon}
              high={Math.round(day.temp.max)}
              low={Math.round(day.temp.min)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </aside>
    </div>
  );
}

const myArr = [1, 2, 5, 10];

export default Weather;
