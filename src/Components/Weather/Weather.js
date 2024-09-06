import React, { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import CurrentWeather from "../CurrentWeather/CurrentWeather.js";
import DailyWeather from "../DailyWeather/DailyWeather.js";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import ConditionCard from "../ConditionsCard/ConditionsCard.js";
import useCoords from "../../hooks/useCoords.js";
import Map from "../../Components/Map/Map.js";

import { IoSunny, IoEye } from "react-icons/io5";
import { WiWindy, WiHumidity } from "react-icons/wi";
function Weather(props) {
  const [hourly, setHourly] = useState(null);
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState(null);
  const { coords, error } = useCoords();

  useEffect(() => {
    const fetchData = async () => {
      if (!coords) return; // Ensure coordinates are available

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
          setCurrent(data.current);
          setDaily(data.daily);
          setHourly(data.hourly);
        }
      } catch (err) {
        console.log("Failed to fetch weather data", err);
      }
    };

    if (error) {
      console.log(error.message);
    } else {
      fetchData();
    }
  }, [coords, error]);

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
      {current ? (
        <aside className={styles.conditions}>
          <ConditionCard
            icon={<IoSunny />}
            condition="UV"
            value={(() => {
              const uv = Math.round(current.uvi);
              let str;
              if (uv <= 2) {
                str = `${uv}: Low`;
              } else if (current.uvi <= 7) {
                str = `${uv}: Medium`;
              } else {
                str = `${uv}: High`;
              }

              return `${str}`;
            })()}
          />
          <ConditionCard
            icon={<IoEye />}
            condition="Visibility"
            value={(() => {
              const visibility = Math.round(current.visibility / 1000);
              return `${visibility === 10 ? "Unlimited" : `${visibility} km`}`;
            })()}
          />
          <ConditionCard
            icon={<WiWindy />}
            condition="Wind"
            value={(() => {
              const windSpeed = Math.round(current.wind_speed);
              return `${windSpeed} m/s`;
            })()}
          />
          <ConditionCard
            icon={<WiHumidity />}
            condition="Humidity"
            value={`${current.humidity}%`}
          />
        </aside>
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
                key={hour.dt}
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
      <Map />
    </div>
  );
}

const myArr = [1, 2, 5, 10];

export default Weather;
