<template>
  <body>
    <div>
      <div
        class="relative w-full px-4 max-w-full flex-grow flex-1"
        v-for="carteira in user"
        :key="carteira"
      >
        <main>
          <aside>
            <h2><span>Bem vindo(a) </span></h2>
            <td class="whitespace-nowrap py-4">
              <h2>
                <span class="font-semibold" id="carteira">
                  {{ carteira.username }}
                </span>
              </h2>
            </td>

            <button id="button">
              <router-link to="/comprar"> COMPRAR </router-link>
            </button>
            <button id="button">
              <router-link to="/profile"> CARTEIRA </router-link>
            </button>
          </aside>

          <article>
            <img
              id="img"
              src="../assets/pig.svg"
              alt="mulher-roxa"
              style="width: 1000px; margin-left: 100px; margin-top: 43px"
            />
          </article>
        </main>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: [],
    };
  },
  created() {
    this.carteira();
  },
  methods: {
    async carteira() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        console.log(`Authorization: Bearer ${accessToken}`);
        try {
          let response = await axios.get(
            `http://localhost:8084/user?email=${this.claims.email}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var carteira of response.data) {
            carteira.updated_on = carteira.updated_on.split("T")[0];
            carteira.created_on = carteira.created_on.split("T")[0];
            carteira.dollar_balance = carteira.dollar_balance.toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            );
          }
          this.user = response.data;
        } catch (error) {
          this.user = `${error}`;
        }
      }
    },
  },
};
</script>

<style scoped>
#carteira {
  font-size: 70px;
}
body {
  background-image: url("../assets/bg2.jpeg");

  height: 900px;
  margin-top: -60px;
}
button {
  margin: 0 15px;
  margin-top: 150px;
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}

button::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: 0.7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
}

button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
}

button:active {
  box-shadow: 0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color);
}

button a:hover {
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}
h2 {
  font-size: 86px;
  line-height: 10px;
  font-family: poppinsmedium;
  margin-top: 65px;
  margin-left: 30px;
}
span {
  color: rgb(255, 255, 255);
}
p {
  line-height: 30px;
  max-width: 500px;
  font-family: poppinslight;
  margin-top: 105px;
  font-size: 20px;
  margin-left: 30px;
}
img {
  width: 580px;
}
aside {
  margin-top: 150px;
}
</style>
