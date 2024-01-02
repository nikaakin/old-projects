import { CountryType } from "@/types";

export type DropdownProps = {
  onChange: (e: SelectChangeEvent) => void;
  countries: CountryType[];
  value: number | null;
};
