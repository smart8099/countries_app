<template>
  <div
    class="h-screen flex items-center justify-center"
    v-if="countriesStore.isLoading"
  >
    <!-- Center the spinner -->
    <fwb-spinner size="10" color="blue" />
  </div>

  <div class="flex" v-else>
    <!-- Side Navigation with Filters -->
    <FilterCountry />

    <!-- Main Content Area (Display Data based on Filters) -->
    <div class="flex-1 p-4">
      <!-- {{ countriesStore.countries }} -->
      <h1 class="text-2xl font-semibold mb-4">Countries({{ countriesStore.totalCountries }})</h1>
      <!-- Display countries based on selected filters -->
      <div class="grid grid-cols-3 gap-5">
        <CountryCard
          v-for="country in countriesStore.filterCountriesByContinentsAndUNMembership"
          :key="country.name.common"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useCountriesStore } from "@/stores/countries";
import { onMounted } from "vue";
import CountryCard from "@/components/CountryCard.vue";
import { FwbSpinner } from "flowbite-vue";
import  FilterCountry  from "@/components/FilterCountry.vue"

const countriesStore = useCountriesStore();

onMounted(async () => {
  countriesStore.getCountries();
});
</script>
  
