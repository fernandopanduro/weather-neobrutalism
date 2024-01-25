import { useEffect, useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState<any>(null);

  const getWeather = (city: string = "mazatlan") => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=${city}&days=5`
    )
      .then(res => res.json())
      .then(data => setWeather(data));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return { weather, getWeather };
};

export default useWeather;
