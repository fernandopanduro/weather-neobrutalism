import { WeatherProps } from "../types";

export default function HourlyWeather({
  hour,
  weather,
  day,
}: {
  hour: number;
  weather: WeatherProps | null | undefined;
  day: number;
}) {
  const hourIndex = hour - 1;

  return (
    <div className="flex flex-col items-center gap-2">
      <span>{`${hour}:00`}</span>
      <div className="flex flex-col items-center">
        <img
          src={
            weather
              ? weather?.forecast.forecastday[day].hour[hourIndex].condition
                  .icon
              : "//cdn.weatherapi.com/weather/64x64/night/116.png"
          }
          alt="icon weather"
        />
        <span>
          {weather
            ? weather?.forecast.forecastday[day].hour[hourIndex].temp_c
            : 24}
          º
        </span>
      </div>
    </div>
  );
}
