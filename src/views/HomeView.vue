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
    <div class="w-1/4 p-4 bg-gray-100 dark:bg-gray-900">
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Filters</h2>
        <!-- List of Filters (Example: Continent) -->
        <div class="mb-2">
          <input type="checkbox" id="filterId" value="input" class="mr-2" />
          <label for="filter">Filter 1</label>
        </div>
      </div>
    </div>

    <!-- Main Content Area (Display Data based on Filters) -->
    <div class="flex-1 p-4">
      <!-- {{ countriesStore.countries }} -->
      <h1 class="text-2xl font-semibold mb-4">Countries</h1>
      <!-- Display countries based on selected filters -->
      <div class="grid grid-cols-3 gap-5">
        <CountryCard
          v-for="country in countriesStore.countries"
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

const countriesStore = useCountriesStore();

onMounted(async () => {
  countriesStore.getCountries();
});
</script>
  
