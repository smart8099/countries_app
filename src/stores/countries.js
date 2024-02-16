import axios from "axios";
import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", {
  state: () => ({
    countries: [],
    isLoading: false,
    singleCountry: {},
    continents: [
      "Africa",
      "Asia",
      "Antarctica",
      "Europe",
      "North America",
      "South America",
      "Oceania",
    ],
    selectedContinents: [],
    isUNMember: false,
    isNonUNMember: false,
    countryName: "",
  }),
  getters: {
    totalCountries() {
      return this.filterCountriesByContinentsAndUNMembership?.length || 0;
    },

    filterCountriesByContinents() {
      if (!this.selectedContinents.length) return this.countries;
      return this.countries.filter((country) =>
        this.selectedContinents.includes(country.continents[0])
      );
    },

    filterCountriesByContinentsAndUNMembership() {
      let filteredCountries = this.filterCountriesByContinents;

      if (this.countryName) {
        const searchTerm =
          this.countryName.charAt(0).toUpperCase() +
          this.countryName.slice(1).toLocaleLowerCase();
        return filteredCountries.filter((country) =>
          country.name.common.includes(searchTerm)
        );
      }

      // Check if both checkboxes are unchecked
      if (!this.isUNMember && !this.isNonUNMember) {
        return filteredCountries;
      }

      // Apply filtering based on UN membership status
      return filteredCountries.filter((country) => {
        // If both checkboxes are checked, return all countries (no further filtering needed)
        if (this.isUNMember && this.isNonUNMember) {
          return true;
        }

        // If only the UN member checkbox is checked, filter countries that are UN members
        if (this.isUNMember) {
          return country.unMember;
        }

        // If only the non-UN member checkbox is checked, filter countries that are not UN members
        if (this.isNonUNMember) {
          return !country.unMember;
        }
      });
    },
  },
  actions: {
    async getCountries() {
      try {
        this.isLoading = true;
        const result = await axios("https://restcountries.com/v3.1/all");
        const extractedCountries = this.extractCountries(result.data);
        this.setCountries(extractedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        this.isLoading = false;
      }
    },

    extractCountries(response) {
      const fieldsToExtract = [
        "name",
        "independent",
        "status",
        "unMember",
        "currencies",
        "capital",
        "region",
        "subregion",
        "languages",
        "flag",
        "maps",
        "population",
        "timezones",
        "continents",
        "flags",
      ];

      return response.map((country) => {
        const extractedData = {};
        fieldsToExtract.forEach((field) => {
          extractedData[field] = country[field];
        });
        return extractedData;
      });
    },

    setCountries(countries) {
      this.countries = countries;
    },

    async getSingleCountry(routeCountryName) {
      console.log(routeCountryName);
      try {
        const result = await fetch(
          `https://restcountries.com/v3.1/name/${routeCountryName}`
        );
        const response = await result.json();
        const extractedCountry = this.extractCountries(response);
        this.singleCountry = extractedCountry[0];
        console.log(this.singleCountry);
      } catch (error) {
        console.log("there was error in request", error);
      }
    },
  },
});
