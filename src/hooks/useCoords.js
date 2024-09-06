import { useState, useEffect } from "react";

export function useCoords() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoords = () => {
      return new Promise((resolve, reject) => {
        const success = (pos) => {
          const coords = pos.coords;
          resolve(coords);
        };

        const error = () => {
          reject(new Error("Error retrieving coordinates"));
        };

        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
      });
    };

    const fetchCoords = async () => {
      try {
        const coordinates = await getCoords();
        setCoords(coordinates);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCoords();
  }, []);

  return { coords, error };
}

export default useCoords;
