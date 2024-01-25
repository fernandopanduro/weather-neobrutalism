type Props = {
  city: string;
  temp: string;
  icon: string;
  weather: string;
};

export default function CardPrimary({ city, temp, icon, weather }: Props) {
  return (
    <div className="max-w-[500px] h-80 rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 flex-grow">
        <h1 className="text-2xl">{city}</h1>
        <span className="text-5xl font-black">{temp}º</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 flex-grow">
        <img src={icon} alt={weather} className="object-contain" />
        <span className="text-2xl">{weather}</span>
      </div>
    </div>
  );
}
