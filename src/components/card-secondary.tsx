import tempIcon from "../assets/images/temperature-control.png";
import windIcon from "../assets/images/wind-sign.png";
import humidityIcon from "../assets/images/water.png";

type Props = { temp: number; wind: number; humidity: number };

export default function CardSecondary({ temp, wind, humidity }: Props) {
  return (
    <div className="max-w-[500px] w-full mx-auto h-60 rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3 flex-grow">
        <img
          src={tempIcon}
          alt={`Icon temp ${temp}`}
          className="h-12 w-12 object-contain aspect-square"
        />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Temp</span>
          <span className="text-xl font-bold">{temp} Fº</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 flex-grow">
        <img
          src={windIcon}
          alt={`Icon Wind ${wind}`}
          className="h-12 w-12 object-contain aspect-square"
        />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Wind</span>
          <span className="text-xl font-bold">{wind} km/h</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 flex-grow">
        <img
          src={humidityIcon}
          alt={`Icon Humidity ${humidity}`}
          className="h-12 w-12 object-contain aspect-square"
        />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Humidity</span>
          <span className="text-xl font-bold">{humidity}%</span>
        </div>
      </div>
    </div>
  );
}
