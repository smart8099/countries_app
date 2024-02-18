<template>
  <div v-if="Object.keys(countriesStore.singleCountry).length === 0">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-700 dark:text-primary-500"
          >
            Error
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-blue-700 md:text-4xl dark:text-white"
          >
            Country Not Found
          </p>
          <p class="mb-4 text-lg font-light text-blue-700 dark:text-gray-400">
            Sorry, we can't find any country called <span class="text-red-700">{{ $route.params.name }}</span>. You'll find lots to explore on the
            home page.
          </p>
          <a
            href="#"
            class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >Back to Homepage</a
          >
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <div class="container mx-auto py-8">
      <!-- Flag -->
      <div class="mb-8">
        <img
          :src="countriesStore.singleCountry.flags?.svg"
          alt="Flag"
          class="w-48 h-auto mx-auto"
        />
      </div>

      <!-- Country Details Table -->
      <div class="mx-auto w-full max-w-3xl">
        <div class="relative overflow-x-auto">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Attribute</th>
                <th scope="col" class="px-6 py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Common Name
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.name?.common }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Official Name
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.name?.official }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Status
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.status }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Independent
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.independent }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  UN Member
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.independent }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Currency
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
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
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Capital
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.capital?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Region
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.region }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Region
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.subregion }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Population
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
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
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Languages
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
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
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Timezones
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.timezones?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Continent
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  {{ countriesStore.singleCountry.continents?.join(", ") }}
                </td>
              </tr>

              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-4 py-2 font-semibold border-b border-gray-300">
                  Maps
                </td>
                <td class="px-4 py-2 border-b border-gray-300">
                  <a
                    :href="countriesStore.singleCountry.maps?.googleMaps"
                    target="_blank"
                    class="text-blue-600"
                    >Google Maps</a
                  >
                  <span
                    v-if="countriesStore.singleCountry.maps?.openStreetMaps"
                  >
                    &nbsp;|&nbsp;
                    <a
                      :href="countriesStore.singleCountry.maps?.openStreetMaps"
                      target="_blank"
                      class="text-blue-600"
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
import { onMounted } from "vue";
import { useCountriesStore } from "@/stores/countries";
import numeral from "numeral";
import { useRoute } from "vue-router";

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
</script>

