import { useEffect, useState } from "react";
import Input from "./components/input";
import Tabs from "./components/taps";
import Button from "./components/button";
import CardPrimary from "./components/card-primary";
import CardSecondary from "./components/card-secondary";
import Accordion from "./components/accordion";
import HourlyWeather from "./components/hourly-weather";
import { WeatherProps } from "./types";
import useWeather from "./hooks/useWeather";

function App() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("Today");
  const tabsArray = ["Today", "Tomorrow"];

  const { weather, getWeather } = useWeather();

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const city = data.get("text");

    if (typeof city === "string") {
      getWeather(city);
    } else {
      console.error("City is not a string or is null");
    }
  };

  return (
    <main className="bg-zinc-20 px-5 py-10 flex flex-col gap-6">
      <form
        action=""
        onSubmit={onsubmit}
        className="max-w-7xl mx-auto flex gap-3">
        <Input placeholder={"New York"} setValue={setValue} value={value} />
        <Button onClick={() => {}}>Send</Button>
      </form>
      <CardPrimary
        city={weather ? weather.location.name : "New York"}
        temp={weather ? weather.current.temp_c : 24}
        icon={
          weather
            ? weather.current.condition.icon
            : "//cdn.weatherapi.com/weather/64x64/night/113.png"
        }
        weather={weather ? weather.current.condition.text : "Clear"}
      />
      <CardSecondary
        temp={weather ? weather.current.temp_f : 3.6}
        wind={weather ? weather.current.wind_kph : 3.6}
        humidity={weather ? weather.current.humidity : 83}
      />
      <div className="max-w-[500px]  w-full mx-auto flex flex-col gap-3">
        <Tabs
          tabsArray={tabsArray}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full mx-auto border-2 border-black bg-white font-bold">
          {activeTab === "Today" && (
            <div className="h-48 px-3 flex gap-2 justify-between items-center">
              {[4, 8, 12, 16].map(hour => (
                <HourlyWeather
                  key={hour}
                  hour={hour}
                  weather={weather}
                  day={0}
                />
              ))}
            </div>
          )}
          {activeTab === "Tomorrow" && (
            <div className="h-48 px-3 flex gap-2 justify-between items-center">
              {[4, 8, 12, 16].map(hour => (
                <HourlyWeather
                  key={hour}
                  hour={hour}
                  weather={weather}
                  day={1}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[500px]  w-full mx-auto flex flex-col gap-3">
        <Accordion
          question="What is the name of the app style?"
          answer="The style is Neobrutalism"
        />
        <Accordion
          question="What technology is used?"
          answer="React, Typescript and TailwindCSS"
        />
        <Accordion
          question="What is weather"
          answer="The state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover"
        />
        <Accordion
          question="How many climates exist?"
          answer="Divides the world's climates into five main groups: tropical, dry, temperate, continental and polar."
        />
        <Accordion
          question="What is the purpose of this app?"
          answer="Provides the current weather status."
        />
      </div>
    </main>
  );
}

export default App;
