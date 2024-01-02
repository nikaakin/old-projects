export const getCountries = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  return await response.json();
};

export const getCountryByLatLng = async (lat: number, lng: number) => {
  const response = await fetch(
    ` https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
      import.meta.env.VITE_GEOCODING_API_KEY
    }`
  );
  return await response.json();
};

export const getCurrenciesByBase = async (base: string) => {
  const response = await fetch(
    `https://api.exchangerate.host/latest?base=${base}`
  );
  return await response.json();
};

export const getAirportsByCountry = async (country: string) => {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/airports?country=BG&name=${country}`,
    {
      headers: {
        "X-Api-Key": import.meta.env.VITE_AIRPORT_API_KEY,
      },
    }
  );

  return await response.json();
};
