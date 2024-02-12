import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", {
  state: () => ({
    countries: [],
    isLoading: false,
    singleCountry: {},
    continents: [
      "Africa",
      "Europe",
      "Asia",
      "Antarctica",
      "Americas",
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
        this.selectedContinents.includes(country.region)
      );
    },

    filterCountriesByContinentsAndUNMembership() {
      let filteredCountries = this.filterCountriesByContinents;

      // Check if both checkboxes are unchecked
      if (!this.isUNMember && !this.isNonUNMember) {
        return filteredCountries;
      }

      // if (this.countryName) {
      //   const searchTerm = this.countryName.toLowerCase();
      //   console.log(searchTerm)
      //   return filteredCountries.filter(country => country.name.common.includes(searchTerm));
      // }

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
        const result = await fetch("https://restcountries.com/v3.1/all");
        const response = await result.json();
        const extractedCountries = this.extractCountries(response);
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
  },
});
