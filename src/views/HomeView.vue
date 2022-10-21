<template>
  <div class="home">
    <section class="main">
      <div class="poruke">
        <h1>Advokatska kancelarija Pilčević</h1>
        <transition name="switch" mode="out-in" appear>
          <div v-if="porukaId == 1">
            <p>Qui tacet consentire non videtur</p>
            <p>-</p>
            <p>Ko ćuti ne saglašava se.</p>
          </div>
          <div v-else-if="porukaId == 2">
            <p>
              Error (ignorantia) iuris nocet, facti non nocet (Paulus – D. 22,
              6, 9, pr.)
            </p>
            <p>-</p>
            <p>
              Zabluda o pravu (neznanje prava) škodi, a zabluda o činjenicama ne
              škodi.
            </p>
          </div>
          <div v-else-if="porukaId == 3">
            <p>Forma dat esse rei</p>
            <p>-</p>
            <p>Forma daje suštinu stvari.</p>
          </div>
          <div v-else-if="porukaId == 4">
            <p>
              Contractus contrahentibus lex esto (Sec. Papinianus – D. 16,3,24)
            </p>
            <p>-</p>
            <p>Ugovor neka bude stranama zakon (Pacta sunt servanda)</p>
          </div>
          <div v-else-if="porukaId == 5">
            <p>Qui tacet consentire non videtur</p>
            <p>-</p>
            <p>Ko ćuti ne saglašava se.</p>
          </div>
        </transition>
      </div>
    </section>
    <section id="onama">
      <div class="onama1">
        <h2>O nama</h2>
        <h4 id="onama-levo">
          Advokatska kancelarija Pilčević se nalazi u Beogradu-Republika Srbija,
          u ulici Lazarevački drum 10 a na Čukarici. Advokatska kancelarija
          Pilčević pruža svojim klijentima usluge iz gotovo svih oblasti prava
          rukovodeći se principom da sa klijentom zajednički definišemo cilj i
          predlažemo najbolja pravna rešenja imajući u vidu pravnu problematiku
          i konkretno činjenično stanje.
          <br />
          <br />
          Naše vrednosti se zasnivaju na društvenoj odgovornosti,
          profesionalizmu, otvorenom odnosu prema klijentu kao iznalaženju
          najpovoljnijeg rešenja uključujući i vansudsko rešenje sporova kao
          alternativa dugotrajnim i iscrpljujućim sudskim postupcima. Svakom
          predmetu pristupamo sistemski i analitično u skladu sa potrebama
          svakog pojedinačnog klijenta i njegovog konkretnog slučaja.
        </h4>
      </div>
    </section>
    <section class="sektor-dole">
      <h2 id="refernce">Naše refernce možete dobiti na upit</h2>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      porukaId: 2,
    };
  },
  methods: {
    vrtiPoruku() {
      setInterval(() => {
        if (this.porukaId < 5) {
          this.porukaId++;
        } else {
          this.porukaId = 1;
        }
      }, 8000);
    },
  },
  created() {
    document.title = "Advokatska kancelarija Pilčević";
  },
  mounted() {
    this.vrtiPoruku();
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
.main {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 10, 10, 0.7),
      rgba(10, 10, 10, 0.7)
    ),
    url("../assets/img/gavel-3577254_1920.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poruke {
  color: whitesmoke;
  width: 100%;
  text-align: center;
}

.poruke h1 {
  font-size: 35px;
  margin-bottom: 60px;
  letter-spacing: 5px;
}

.poruke p {
  font-size: 17px;
  font-style: oblique;
  letter-spacing: 4px;
}

#onama {
  min-height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(15, 15, 15);
  padding: 20px 10% 40px 10%;
  color: rgb(187, 180, 150);
  text-align: justify;
}

#onama h2 {
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
}

#onama h4 {
  font-size: 14px;
  font-weight: 300;
}

.sektor-dole {
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 10, 10, 0.7),
      rgba(10, 10, 10, 0.7)
    ),
    url("../assets/img/janko-ferlic-sfL_QOnmy00-unsplash.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 10%;
  min-height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sektor-dole h2 {
  font-size: 15px;
  font-weight: 300;
  color: rgb(187, 180, 150);
}

.switch-enter-from {
  opacity: 0;
  transform: translateY(-200px);
}

.switch-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.75s ease;
}

@media screen and (max-width: 1050px) {
  .poruke p {
    font-size: 11px;
  }
}
</style>
