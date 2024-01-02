export type CountryType = {
  name: { official: string; common: string };
  flags: { png: string };
  capital: string[];
  population: number;
  continents: string[];
  borders: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  region: string;
  subregion: string;
  cca3: string;
};
