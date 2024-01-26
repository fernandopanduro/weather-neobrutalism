import { useEffect, useState } from "react";
import { WeatherProps } from "../types";
import getLocation from "../utils/getLocation";

const useWeather = () => {
  const [weather, setWeather] = useState<WeatherProps>();
  const [error, setError] = useState(false);

  const { county } = getLocation();

  const getWeather = (city: string = "Mexico") => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=${city}&days=5`
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
        } else {
          setWeather(data);
          setError(false);
        }
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (county === null) {
      getWeather();
    } else {
      getWeather(county);
    }
  }, [county]);

  return { weather, getWeather, error };
};

export default useWeather;
