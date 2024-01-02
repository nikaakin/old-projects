import { arrayWithCommas } from "@/helpers";
import { CountryInfoProps } from "./type";

export const useCountryInfo = ({ country }: CountryInfoProps) => {
  if (!country) return {};

  const capitals = arrayWithCommas(country.capital);

  const region =
    country.region +
    (country.region && country.subregion ? ", " : "") +
    country.subregion;

  const currencyObject = country.currencies[Object.keys(country.currencies)[0]];
  const currency =
    currencyObject.name +
    (currencyObject.symbol ? ` (${currencyObject.symbol})` : "");

  const continent = arrayWithCommas(country.continents);

  const population = country.population;

  const borders = arrayWithCommas(country.borders);

  return { capitals, region, currency, continent, population, borders };
};
