<template>
  <div class="bg-gray-100 dark:bg-gray-900 p-4">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2 dark:text-white">Filters</h2>
      <!-- List of Filters (Example: Continent) -->

      <label for="Continent" class="font-bold block dark:text-white">Continents</label>

      <div
        v-for="(continent, index) in countriesStore.continents"
        :key="index"
        class="mb-2"
      >
        <input
          type="checkbox"
          :id="'continent-' + index"
          v-model="countriesStore.selectedContinents"
          :value="continent"
          class="mr-2 "
        />
        <label :for="'continent-' + index" class="dark:text-white">{{ continent }}</label>
      </div>

      <div class="mt-4">
        <label for="unMembers" class="font-bold block dark:text-white">UN Membership</label>
        <div class="mb-2">
          <input
            type="checkbox"
            id="unMember"
            value="true"
            class="mr-2"
            v-model="countriesStore.isUNMember"
          />
          <label for="unMember" class="dark:text-white"> UN Member</label>
        </div>
        <div class="mb-2">
          <input
            type="checkbox"
            id="nonUNMember"
            value="false"
            class="mr-2"
            v-model="countriesStore.isNonUNMember"
          />
          <label for="nonUNMember" class="dark:text-white"> non-UN Member</label>
        </div>
      </div>

      <button type="button" class="w-full text-white text-2xl font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Take Countries Quiz</button>
    </div>
  </div>
</template>

<script setup>
import { useCountriesStore } from "@/stores/countries";
const countriesStore = useCountriesStore();
</script>
