import { useDebounce } from "@/hooks";
import { getAirportsByCountry } from "@/services";
import { AirportType } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useAirports = () => {
  const [value, setValue] = useState<string>("");
  const debouncedVal = useDebounce(value, 500);
  const queryClient = useQueryClient();

  const {
    data: allAirports,
    refetch,
    isLoading,
  } = useQuery<AirportType[]>({
    queryKey: ["airports", debouncedVal],
    staleTime: Infinity,
    queryFn: () => getAirportsByCountry(value),
  });

  useEffect(() => {
    if (queryClient.getQueryData(["airports", value])) return;
    refetch();
  }, [debouncedVal]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const airports = allAirports?.filter((airport) => airport.iata);

  return { value, handleSearch, airports, isLoading };
};
