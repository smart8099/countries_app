<template>
  <div class="flex">
    <!-- Side Navigation with Filters -->
    <div
      class="fixed left-0 top-[6rem] bottom-0 w-1/4 ml-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto z-10"
    >
      <FilterCountry />
    </div>

    <!-- Main Content Area (Display Data based on Filters) -->
    <div class="flex-1">
      <div class="p-4 pl-[26%]">
        <div
          class="h-screen flex items-center justify-center"
          v-if="countriesStore.isLoading"
        >
          <!-- Center the spinner -->
          <fwb-spinner size="10" />
        </div>

        <div class="dark:bg-gray-900" v-else>
          <h1 class="sticky top-20 z-50 text-2xl font-semibold  mb-4  border-gray-200 dark:bg-gray-900  dark:text-white">
            Countries({{ countriesStore.totalCountries }})
          </h1>
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
    </div>
  </div>
</template>




  
  <script setup>
import { useCountriesStore } from "@/stores/countries";
import { onMounted } from "vue";
import CountryCard from "@/components/CountryCard.vue";
import { FwbSpinner } from "flowbite-vue";
import FilterCountry from "@/components/FilterCountry.vue";

const countriesStore = useCountriesStore();

onMounted(async () => {
  countriesStore.getCountries();
});
</script>
  
