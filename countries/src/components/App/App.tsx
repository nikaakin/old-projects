import { Outlet } from "react-router-dom";
import { Dropdown, CountryInfo } from "@/components";
import { useApp } from "./useApp";
import { Box, Tab, Tabs } from "@mui/material";

export const App = () => {
  const {
    countries,
    handleSelectCountry,
    selectedCountry,
    airplanePage,
    handleTabChange,
  } = useApp();

  return (
    <div className="w-screen h-screen transition-all pt-10 bg-zinc-100 text-black">
      <div className="w-11/12  mx-auto px-7 py-3 border border-black rounded">
        <div className="flex flex-col gap-6">
          <Dropdown
            countries={countries}
            onChange={handleSelectCountry}
            value={selectedCountry}
          />
          <CountryInfo
            country={selectedCountry && countries[selectedCountry]}
          />
        </div>

        <div className="mt-8">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={airplanePage ? "/airplane" : ""}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="Currency Exchange" value="" className="uppercase" />
              <Tab label="Airports" value="/airplane" className="uppercase" />
            </Tabs>
          </Box>
          <br />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
