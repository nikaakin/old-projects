import { Card, Skeleton, TextField } from "@mui/material";
import { useAirports } from "./useAirports";
import { Fragment } from "react";

export const Airports = () => {
  const { value, handleSearch, airports, isLoading } = useAirports();

  return (
    <Card className="px-7 py-4">
      <h1 className="text-3xl ">Airports</h1>

      <br />

      <TextField
        value={value}
        onChange={handleSearch}
        id="standard-basic"
        placeholder="Search for airports"
        variant="standard"
        className="flex-1"
      />
      <br />
      <br />

      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        {isLoading && (
          <Fragment>
            <Skeleton className="w-1/2" />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
            <Skeleton className="w-3/4" />
          </Fragment>
        )}

        {airports?.length === 0 ? (
          <div className="p-2 text-red-900">No airports found</div>
        ) : (
          airports?.map((airport) => (
            <div key={airport.iata} className="p-2">
              {airport.iata} - {airport.name} ({airport.city})
            </div>
          ))
        )}
      </div>
    </Card>
  );
};
