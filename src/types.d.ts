export type WeatherProps = {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: [
      { hour: [{ condition: { icon: string; text: string }; temp_c: string }] }
    ];
  };
  location: { name: string };
};
