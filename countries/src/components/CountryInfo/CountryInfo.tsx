import { Card } from "@mui/material";
import { useCountryInfo } from "./useCountryInfo";
import { CountryInfoProps } from "./type";
import { CountryInfoField } from "@/components";

export const CountryInfo = ({ country }: CountryInfoProps) => {
  const { capitals, currency, region, borders, continent, population } =
    useCountryInfo({ country });

  if (!country) return null;
  return (
    <Card>
      <div className="flex flex-row gap-4 px-5 py-4 items-center">
        <h1 className="text-2xl font-medium ">{country.name.official}</h1>
        <div className="w-10 h-8">
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      </div>
      <div className="block flex-row sm:flex justify-between px-5 py-4 gap-8">
        <ul className="flex-1">
          <CountryInfoField title="Capital" content={capitals || ""} />
          <CountryInfoField title="Currency" content={currency || ""} />
          <CountryInfoField title="Region" content={region || ""} />
        </ul>
        <ul className="flex-1">
          <CountryInfoField title="Continent" content={continent || ""} />
          <CountryInfoField title="Population" content={population || ""} />
          <CountryInfoField title="Borders" content={borders || ""} />
        </ul>
      </div>
    </Card>
  );
};
