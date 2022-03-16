<template>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <div
    class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24"
    style="width: 1100px; margin-top: 50px; margin-left: 350px"
  >
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">Comprar</h3>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          ></div>
        </div>
      </div>

      <div class="block w-full overflow-x-auto">
        <table class="items-center bg-transparent w-full border-collapse">
            <caption> </caption>

          <thead>
            <tr>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                stock_name
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                stock_symbol
              </th>

              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                askmin
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                askax
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                bidmin
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                bidmax
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                DATA
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Comprar
              </th>
            </tr>
          </thead>

          <tbody
            class="divide-y divide-gray-200 bg-white"
            v-for="status in user"
            :key="status"
          >
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.stock_name }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.stock_symbol }}
            </td>

            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.ask_min }}
            </td>

            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.ask_max }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.bid_min }}
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.bid_max }}
            </td>

            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              {{ status.updated_on }}
            </td>
            <td class="whitespace-nowrap px-6 py-4">
     <div>
    <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()" >
    Comprar
    </button>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Modal Title
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto"
         >
            <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-PINK"></div>
  </div>
            </td>

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      claims: [],

      user: [],
      stocks: [],
       showModal: true
    };
  },
  created() {
    this.setup1();
    this.setup();
    this.toggleModal();
  },
  methods: {
    async toggleModal(){
      this.showModal = !this.showModal;
    },
    async setup1() {
      if (this.$root.authenticated) {
        console.log(this.$auth.getUser);
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        console.log(`Authorization: Bearer ${accessToken}`);
        try {
          let response = await axios.get(
            "http://localhost:8083/STOCKS/listar",
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var status of response.data) {
            status.updated_on = status.updated_on.split("T")[0];
          }

          this.user = response.data;
        } catch (error) {
          console.log(error);
          this.user = `${error}`;
        }
      }
    },

    async setup() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        console.log(`Authorization: Bearer ${accessToken}`);
        try {
          let response = await axios.get(
            "http://localhost:8083/STOCKS/listar",
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var acao of response.data) {
            acao.updated_on = acao.updated_on.split("T")[0];
          }

          this.stocks = response.data;
        } catch (error) {
          console.log(error);
          this.stocks = `${error}`;
        }
      }
    },
  },
};
</script>


