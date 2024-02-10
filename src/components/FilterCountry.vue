<template>
  <div class="w-1/4 p-4 bg-gray-100 dark:bg-gray-900 ml-4">
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Filters</h2>
      <!-- List of Filters (Example: Continent) -->

      <label for="Continent" class="font-bold block">Continents</label>
     
      <div v-for="(continent, index) in countriesStore.continents" :key="index" class="mb-2">
        <input type="checkbox" :id="'continent-' + index" v-model="countriesStore.selectedContinents" :value="continent" class="mr-2" />
        <label :for="'continent-' + index">{{ continent }}</label>
      </div>

      <label for="unMembers" class="font-bold block">UN Membership</label>
<div class="mb-2">
  <input type="checkbox" id="unMember" value="true" class="mr-2" v-model="countriesStore.isUNMember" />
  <label for="unMember"> UN Member</label>
</div>
<div class="mb-2">
  <input type="checkbox" id="nonUNMember" value="false" class="mr-2" v-model="countriesStore.isNonUNMember"/>
  <label for="nonUNMember"> non-UN Member</label>
</div>


    </div>
  </div>
</template>

<script setup>
import { useCountriesStore } from "@/stores/countries";
const countriesStore = useCountriesStore();
</script>
