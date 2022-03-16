<template>
  <div id="app2">


    <nav aria-label="id">
      <img src="./assets/esseaqui.png" alt="" id="boi" />
      <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800" aria-label="id">
        <div
          class="container flex flex-wrap justify-between items-center mx-auto"
        >
          <a href="#" class="flex"> </a>
          <div class="flex items-center md:order-2">
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              types="button"
              data-dropdown-toggle="dropdown"
            >
              <span class="sr-only">Open user menu</span>
            </button>
            <!-- Dropdown menu -->
            <div
              class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div class="py-3 px-4">
                <span class="block text-sm text-gray-900 dark:text-white"
                  >Bonnie Green</span
                >
                <span
                  class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
                  >name@flowbite.com</span
                >
              </div>
              <ul class="py-1" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
            >
              <li>
                <router-link to="/" id="anime"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    fill="currentColor"
                    class="bi bi-house-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"
                    />
                  </svg>
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/comprar" v-if="authenticated" id="anime">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    fill="currentColor"
                    class="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                    />
                  </svg>
                  Comprar
                </router-link>
              </li>
              <li>
                <router-link to="/profile" v-if="authenticated" id="anime">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    fill="currentColor"
                    class="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
                    />
                  </svg>
                  Carteira e Ações
                </router-link>
              </li>
              <li>
                <router-link to="/historico" v-if="authenticated" id="anime">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    fill="currentColor"
                    class="bi bi-clock-history"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                    />
                    <path
                      d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                    />
                    <path
                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  Histórico
                </router-link>
              </li>

              <li>
                <a
                  id="inscreva-se-btn"
                  v-if="authenticated"
                  v-on:click="logout()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    fill="currentColor"
                    class="bi bi-door-closed"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"
                    />
                    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return { authenticated: false };
  },
  async created() {
    await this.isAuthenticated();
    this.$auth.authStateManager.subscribe(this.isAuthenticated);
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: "isAuthenticated",
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    async logout() {
      await this.$auth.signOut();
    },
  },
};
</script>

<style>
#boi {
  width: 100px;
  height: 100px;
}
#anime {
  font-size: 20px;
  font-family: cursive;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-top: 1.3rem;
}

#anime:hover {
  padding: 25px;
  background-color: #82508f;
  color: #e0bb9d;
  border-radius: 15px;
}
#inscreva-se-btn {
  background-color: #82508f;
  color: #f4ccd8;
  padding: 10px;
  border-radius: 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-top: 1.3rem;
}

#inscreva-se-btn:hover {
  background-color: #9c0da1;
  color: #e0bb9d;
}

nav div a {
  color: #ffffff;
  text-decoration: none;
  margin: 12px;

  transition: 0.5s;
}
nav {
  margin: auto;
  background-color: linear-gradient(
    45deg,
    rgb(243, 185, 231) 30%,
    rgb(245, 165, 241) 48%
  );
  /* border-bottom: 4px solid rgb(0, 248, 227); */
  padding: 5px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20;
}

a {
  text-decoration: underline;
  cursor: pointer;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgba(0, 0, 0, 0.657) url("./assets/bg2.jpeg");
  background-blend-mode: darken;
}
.title {
  font-size: 24px;
  font-weight: 300;
}
</style>
