import { SyntheticEvent, useEffect, useState } from "react";
import { CountryType, latlongType } from "@/types";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCountries, getCountryByLatLng } from "@/services";
import { SelectChangeEvent } from "@mui/material";
import { getCountryByName } from "@/helpers";
import { GoogleMapsGeocodingResultType } from "@/types";

export const useApp = () => {
  const [latlong, setLatLong] = useState<latlongType | null>(null);

  const navigate = useNavigate();
  const { code } = useParams();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  const { data: countries } = useQuery({
    staleTime: Infinity,
    queryKey: ["countries"],
    queryFn: getCountries,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      if (code) {
        data.find((country: CountryType, i: number) => {
          if (country.cca3 === code) {
            queryClient.setQueryData(["index"], i);
            return true;
          }
          return false;
        });
      }
    },
  });

  const { refetch: getCurrentLocation } =
    useQuery<GoogleMapsGeocodingResultType>({
      staleTime: Infinity,
      queryKey: ["currentLocation"],
      queryFn: () => getCountryByLatLng(latlong!.latitude, latlong!.longitude),
      onError: (error) => {
        console.error(error);
      },
      onSuccess: (data) => {
        let newCountry: CountryType | null = null,
          index: number | null = null;
        data.results[0].address_components.find((addressComponent) => {
          if (addressComponent.types.includes("country")) {
            const result = getCountryByName(
              addressComponent.long_name,
              countries
            );
            newCountry = result.country;
            index = result.index;

            queryClient.setQueryData(["index"], index);

            return true;
          }
          return false;
        });

        if (newCountry) {
          navigate(`/${(newCountry as CountryType).cca3}`);
        }
      },
      enabled: false,
    });

  useEffect(() => {
    if (code) return;
    if (latlong) {
      setTimeout(() => getCurrentLocation(), 0);
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLong({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [latlong]);

  const handleSelectCountry = (e: SelectChangeEvent<number>) => {
    queryClient.invalidateQueries(["index"]);
    queryClient.setQueryData(["index"], e.target.value as number);
    queryClient.invalidateQueries(["index"]);
  };

  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    navigate(newValue === "" ? `/${code}` : `/${code}/airports`);
  };

  const selectedCountry = queryClient.getQueryData(["index"]) as number | null;

  return {
    countries,
    handleSelectCountry,
    handleTabChange,
    selectedCountry,
    airplanePage: pathname.includes("airports"),
  };
};
