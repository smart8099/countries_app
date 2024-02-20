<script setup>
import numeral from 'numeral'
defineProps({
  country: Object,
});
</script>

<template>
  
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <router-link :to="{ name: 'countryDetails',params : {name : country.name.common}}">
      <img class="rounded-t-lg w-full" :src="country.flags.svg" :alt="country.name.common" />
    </router-link>
    <div class="p-3">
      <router-link
        :to="{ name: 'countryDetails',params : {name : country.name.common}}"
      >
      
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ country.name.common }} 
        </h5>
      </router-link>
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md text-center block" >
        <span class="font-bold">Continent :</span> {{ country.continents[0] }}
      </span> 
      <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md text-center block">
        <span class="font-bold">Region :</span> {{ country.subregion }}
      </span> 
      
      <p class="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
       <span class="font-bold">Population :</span>  
       <span class="m-2 p-2 bg-blue-400 text-slate-800 rounded-md text-center" >{{ numeral(country.population).format(0,0) }}</span>
      </p>
    </div>
  </div>
</template>


