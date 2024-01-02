import {
  Card,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCurrency } from "./useCurrency";

export const Currency = () => {
  const {
    countries,
    baseCurrency,
    currCurrencyIndex,
    currCountryIndex,
    handleSelect,
    secondCurrency,
    baseValue,
    handleValueChange,
    secondValue,
  } = useCurrency();

  if (!currCountryIndex || !countries) return;

  return (
    <Card className="px-7 py-4">
      <h1 className=" text-3xl">Currency Exchange</h1>
      <br />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <Select
          value={currCurrencyIndex || currCountryIndex}
          onChange={handleSelect}
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        >
          {countries.map((country, i) => (
            <MenuItem key={country.cca3 + "currency"} value={i}>
              {country.name.common}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />

      <div className="flex items-center gap-2 ">
        <TextField
          value={baseValue}
          onChange={handleValueChange}
          variant="standard"
          className="flex-1"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{baseCurrency}</InputAdornment>
            ),
          }}
        />
        <div className="w-4 h-3 mt-4 relative before:absolute after:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-gray-900 before:rounded after:rounded after:bottom-0 after:right-0 after:w-full after:h-[3px] after:bg-gray-900"></div>
        <TextField
          value={secondValue.toFixed(2)}
          variant="standard"
          className="flex-1"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{secondCurrency}</InputAdornment>
            ),
          }}
          disabled
        />
      </div>
    </Card>
  );
};
