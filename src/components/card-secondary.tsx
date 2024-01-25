type Props = { temp: string; wind: string; humidity: string };

export default function CardSecondary({ temp, wind, humidity }: Props) {
  return (
    <div className="max-w-[500px] h-60 rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="icon" alt={temp} />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Cº (max-min)</span>
          <span className="text-xl font-bold">{temp}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="icon" alt={wind} />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Wind</span>
          <span className="text-xl font-bold">{wind}km/h</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="icon" alt={humidity} />
        <div className="flex flex-col items-center">
          <span className="text-xl font-normal">Humidity</span>
          <span className="text-xl font-bold">{humidity}</span>
        </div>
      </div>
    </div>
  );
}
