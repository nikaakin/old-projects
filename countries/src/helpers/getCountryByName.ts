import { CountryType } from "@/types";

export const getCountryByName = (name: string, countries: CountryType[]) => {
  const lowerCasedName = name.toLowerCase();
  let index: number | null = null;
  const country = countries.find((country, i) => {
    if (country.name.common.toLowerCase() === lowerCasedName) {
      index = i;
      return true;
    }

    return false;
  });

  return { country: country || null, index: index || null };
};
