import { getCurrenciesByBase } from "@/services";
import { CountryType, CurrenciesType } from "@/types";
import { SelectChangeEvent } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useCurrency = () => {
  const [baseValue, setBaseValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);

  const queryClient = useQueryClient();

  const currCurrencyIndex = useQuery<number | null>({
    queryKey: ["index-currency"],
    enabled: false,
  }).data;

  const currCountryIndex = useQuery<number | null>({
    queryKey: ["index"],
    enabled: false,
  }).data;

  const { data: countries } = useQuery<CountryType[]>({
    enabled: false,
    staleTime: Infinity,
    queryKey: ["countries"],
  });

  const { data: currencies } = useQuery<CurrenciesType>({
    staleTime: Infinity,
    queryKey: ["currencies", countries?.[currCountryIndex!]?.cca3],
    queryFn: () =>
      getCurrenciesByBase(
        Object.keys(countries![currCountryIndex!].currencies)[0]
      ),
    enabled: !!currCountryIndex,
  });

  const baseCurrency =
    countries?.[currCountryIndex!]?.currencies[
      Object.keys(countries![currCountryIndex!].currencies)[0]
    ].symbol;
  const secondCurrency =
    countries?.[currCurrencyIndex || currCountryIndex!]?.currencies[
      Object.keys(
        countries![currCurrencyIndex || currCountryIndex!]?.currencies
      )[0]
    ].symbol;

  const handleSelect = (event: SelectChangeEvent<number>) => {
    queryClient.setQueryData(["index-currency"], event.target.value);

    handleValueChange(
      {
        target: { value: baseValue.toString() },
      } as React.ChangeEvent<HTMLInputElement>,
      +event.target.value
    );
  };

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newCurrencyIndex?: number
  ) => {
    setBaseValue(+event.target.value);

    let rate = 1;

    if (currCurrencyIndex || newCurrencyIndex)
      rate =
        currencies?.rates[
          Object.keys(
            countries![newCurrencyIndex || currCurrencyIndex!]?.currencies || {}
          )[0]
        ] || 1;
    else
      rate =
        currencies?.rates[
          Object.keys(countries![currCountryIndex!]?.currencies || {})[0]
        ] || 1;

    setSecondValue(+event.target.value * rate);
  };

  return {
    countries,
    currCurrencyIndex,
    currCountryIndex,
    baseCurrency,
    secondCurrency,
    handleSelect,
    handleValueChange,
    baseValue,
    secondValue,
  };
};
