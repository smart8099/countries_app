<template>
  <h2>{{ $route.params.name }}</h2>
  
    <!-- <h2>{{ countriesStore.singleCountry.name.common }}</h2> -->
    <h2>{{ countriesStore.singleCountry.name}}</h2> 
  
</template>

<script setup>
import { onMounted } from "vue";
import { useCountriesStore } from "@/stores/countries";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});


const countriesStore = useCountriesStore();

onMounted(async () => {
  await countriesStore.getSingleCountry(props.name);
  console.log('coutry object is ', countriesStore.singleCountry)
  
});


</script>

