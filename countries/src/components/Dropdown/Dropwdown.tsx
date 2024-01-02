import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";
import { DropdownProps } from "./type";
import { CountryType } from "@/types";

export const Dropdown = ({ countries, onChange, value }: DropdownProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="country">Country</InputLabel>
      <Select
        labelId="country"
        id="country-select"
        value={value ?? ""}
        label="country"
        onChange={onChange}
        disabled={!countries}
        MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
      >
        {countries?.map((country: CountryType, i) => (
          <MenuItem value={i} key={country.cca3}>
            <Link to={`/${country.cca3}`} className="w-full h-full">
              {country.name.common}
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
