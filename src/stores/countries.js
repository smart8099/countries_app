import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", {
  state: () => ({
    countries: [],
    isLoading: false,
    singleCountry : {},
  }),
  getters: {},
  actions: {
    async getCountries() {
      this.isLoading = true;
      const result = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      const response = await result.json();
      const fieldsToExtract = [
        'name',
        'independent',
        'status',
        'unMember',
        'currencies',
        'capital',
        'region',
        'subregion',
        'languages',
        'flag',
        'maps',
        'population',
        'timezones',
        'continents',
        'flags',
      ];
      
      // Function to extract specific fields from a country
      const extractFields = (country) => {
        const extractedData = {};
        fieldsToExtract.forEach((field) => {
          extractedData[field] = country[field];
        });
        return extractedData;
      };

      console.log(extractFields)
      
      // Use map to create a new list with extracted data for each country
      const extractedCountries = response.map(extractFields);
      
      // console.log(extractedCountries);
      
      this.countries = extractedCountries;
      console.log(this.countries)
      this.isLoading = false;
    },


  },
});
