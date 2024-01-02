export type GoogleMapsGeocodingResultType = {
  results: [
    {
      address_components: [
        {
          long_name: string;
          short_name: string;
          types: string[];
        }
      ];
    }
  ];
};
