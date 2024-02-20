<template>
  <div
    class="h-screen flex items-center justify-center"
    v-if="countriesStore.isLoading"
  >
    <!-- Center the spinner -->
    <fwb-spinner  size="10"/>
  </div>
  <div v-else>
    <div class="container mx-auto py-8 dark:bg-gray-900">
      <!-- Flag -->
      <div class="mb-8 flex justify-center">
        <figure class="max-w-lg">
          <img
            class="h-auto max-w-full rounded-lg"
            :src="countriesStore.singleCountry.flags?.svg"
            alt="flag"
          />
          <figcaption
            class="mt-2 text-lg text-center text-gray-900 dark:text-white"
          >
            Flag of {{ countriesStore.singleCountry.name?.official }} 
          </figcaption>
        </figure>
      </div>

      <!-- Country Details Table -->
      <div class="mx-auto w-full max-w-3xl">
        <div class="relative overflow-x-auto">
          <table
            class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3 dark:text-white">Attribute</th>
                <th scope="col" class="px-6 py-3 dark:text-white">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Common Name
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.name?.common }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Official Name
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.name?.official }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Status
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.status }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Independent
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.independent }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  UN Member
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.independent }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Currency
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  <div
                    v-for="(currency, code) in countriesStore.singleCountry
                      ?.currencies"
                    :key="code"
                  >
                    {{ currency.name }} ({{ currency.symbol }})
                  </div>
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Capital
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.capital?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Region
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.region }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Region
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.subregion }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Population
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{
                    numeral(countriesStore.singleCountry.population).format(
                      0,
                      0
                    )
                  }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Languages
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{
                    countriesStore.singleCountry?.languages
                      ? Object.values(
                          countriesStore.singleCountry.languages
                        ).join(", ")
                      : "N/A"
                  }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Timezones
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.timezones?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Continent
                </td>
                <td
                  class="px-4 py-2 border-b border-gray-300 dark:text-slate-300"
                >
                  {{ countriesStore.singleCountry.continents?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="px-4 py-2 font-semibold border-b border-gray-300 dark:text-slate-300"
                >
                  Maps
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  <a
                    :href="countriesStore.singleCountry.maps?.googleMaps"
                    target="_blank"
                    class="text-blue-600 dark:text-blue-500"
                    >Google Maps</a
                  >
                  <span
                    v-if="countriesStore.singleCountry.maps?.openStreetMaps"
                  >
                    &nbsp;|&nbsp;
                    <a
                      :href="countriesStore.singleCountry.maps?.openStreetMaps"
                      target="_blank"
                      class="text-blue-600 dark:text-blue-500"
                      >OpenStreetMap</a
                    >
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { useCountriesStore } from "@/stores/countries";
import numeral from "numeral";
import { useRoute } from "vue-router";
import { FwbSpinner } from "flowbite-vue";

const route = useRoute();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const countriesStore = useCountriesStore();

onMounted(async () => {
  await countriesStore.getSingleCountry(props.name, route.query);
  console.log("coutry object is ", countriesStore.singleCountry);
});

onBeforeUnmount(() =>{
  countriesStore.clearSingleCountry()
})
</script>

