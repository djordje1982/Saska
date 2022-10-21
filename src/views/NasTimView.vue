<template>
  <div class="nas-tim">
    <section class="o-nama-container">
      <img src="../assets/img/Tim1.jpg" alt="Aleksandra Pilcevic" />
      <div class="tim-text">
        <div class="ime">
          <h2>Advokat Aleksandra Pilčević</h2>
        </div>
        <a href="mailto:aleksandra.pilcevic@pilceviclaw.rs"
          >aleksandra.pilcevic@pilceviclaw.rs</a
        >
        <p>
          Advokat Aleksandra D. Pilčević je rođena 19. oktobra 1982. godine u
          Beogradu. Diplomirala je na Pravnom Fakultetu Univerziteta u Beogradu
          2008. godine sa prosečnom ocenom 8,00. Završila Master studije iz
          oblasti ,,Prava deteta-Podmodul na Porodičnom pravu“, 2011 godine.
          <br /><br />
          Pravosudni ispit završila 2016. godine, a član Advokatske Komore
          Beograda i Advokatske Komore Srbije postala 13. septembra 2019.
          godine. Poseduje sertifikat za zastupanje maloletnih lica. Advokat
          Aleksandra Pilčević je radila preko 10 godina u kompanijama koje se
          bave privrednim pravom kao što su NIS a.d. Novi Sad, O zone a.d.
          Beograd, Foodland doo, West Properties doo Beograd, na pozicijama
          ekspert kordinator za pravne poslove do upravljačkim pozicija šefa
          pravne službe
          <br /><br />
          Svoje iskustvo je upotpunila na poziciji Šef kabineta predsednika u
          Udruženju reciklera Srbije, gde joj je glavni opis poslova bio rad na
          donošenju Zakona o upravljanu otpadom i Zakona o zaštiti životne
          okoline, kao i stalna korespodencija između članstva i resornog
          ministarstva.
          <br /><br />
          Aleksandra Pilčević je bila stručni saradnik u nastavi na predmetu
          gradjansko pravo na Visokoj školi za poslovnu ekonomiju i
          preduzetništvo PEP u Beogradu.
        </p>
      </div>
    </section>
    <section class="o-nama-container">
      <div class="tim-text">
        <div class="ime">
          <h2 class="center">Advokat Marija Radanović</h2>
        </div>
        <a class="center no-m" href="mailto:marija.radanovic@pilceviclaw.rs"
          >marija.radanovic@pilceviclaw.rs</a
        >
        <h3 class="center">Advokatska kancelarija Radanović</h3>
        <h3 class="center">telefon: +381 62 666 506</h3>
        <a class="center" href="mailto:advokat.radanovic@gmail.com"
          >advokat.radanovic@gmail.com</a
        >

        <p>
          Advokat Marija Radanović je spoljni saradnik u advokatskoj kancelariji
          Pilčević od 2020. godine.
          <br /><br />
          Rođena je 13. jula 1983. godine u Beogradu. Diplomirala je na Pravnom
          Fakultetu Univerziteta u Beogradu 2010. godine na medjunarodnom smeru.
          Pravosudni ispit završila 2014. godine, a član Advokatske Komore
          Beograda i Advokatske Komore Srbije postala 2019. godine. Poseduje
          sertifikat za zastupanje maloletnih lica.
          <br /><br />
          Radila je kao advokatski pripravnik od 2011 do 2013. godine u
          advokatskoj kancelariji Dragoslava Ljubičanovića. Od 2013. godine
          radila kao pravni savetnik u Handi- tell doo.
          <br /><br />
          Odlično govori engleski jezik.
        </p>
      </div>
      <img src="../assets/img/Tim2.jpg" alt="Marija Radanovic" />
    </section>
    <section class="o-nama-container">
      <img src="../assets/img/Tim3.jpg" alt="Ana Opacic" />
      <div class="tim-text">
        <div class="ime">
          <h2>Dr. Ana Opačić</h2>
        </div>
        <a href="mailto:ana.opacic@pilceviclaw.rs">ana.opacic@pilceviclaw.rs</a>
        <p>
          spoljni saradnik i pravni savetnik u advokatskoj kancelariji Pilčević
          od 2019. godine.
          <br />
          <br />
          Rođena je 20. Jula 1982. godine u Beogradu. Diplomirala na Pravnom
          fakultetu Univerziteta u Beogradu 2008. godine. Doktor pravnih nauka
          na Univerzitetu Union od 2014. godine. Odbranila disertaciju na temu
          "Stečaj nad imovinom fizičkih lica - Individualni stečaj". Vanredni
          profesor (privrednopravna oblast i međunarodnopravna oblast) na
          predmetima „Međunarodno privatno pravo“ i "Diplomatsko i konzularno
          pravo", na Falkultetu za poslovne studije i pravo, Univerzitet Union
          "Nikola Tesla", Beograd.
          <br /><br />
          Odlično govori engleski jezik.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    document.title = "PL - Naš tim";
  },
};
</script>

<style scoped>
.nas-tim {
  width: 100%;
  min-height: 100vh;
  padding: 90px 10% 0 10%;

  background-image: linear-gradient(
      to right bottom,
      rgba(10, 10, 10, 0.9),
      rgba(10, 10, 10, 0.85)
    ),
    url("../assets/img/clarisse-meyer-jKU2NneZAbI-unsplash.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(187, 180, 150);
}

section {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 35px;
}

section:last-of-type {
  margin-bottom: 0;
}
section img {
  width: 21%;
  border-radius: 10px;
}

section > div {
  flex: 1;
  padding: 0 0 20px 0;
}

.ime {
  border-bottom: 1px solid rgb(187, 180, 150);
  font-size: 20px;
}

h3 {
  font-size: 16px;
  text-align: right;
}

a {
  color: rgb(187, 180, 150);
  margin-bottom: 40px;
  font-size: 15px;
  width: 100%;
  display: inline-block;
}

p {
  text-align: justify;
  font-size: 16px;
  font-weight: 300;
}

h2 {
  font-weight: 700;
  font-size: 20px;
}

section:nth-of-type(2) h2,
section:nth-of-type(2) a {
  text-align: right;
}

.no-m {
  margin: 0;
}

.o-nama-container:nth-last-of-type(2).tim-text {
  grid-area: text2;
}
.o-nama-container:nth-last-of-type(2) img {
  grid-area: slika2;
}

@media screen and (max-width: 680px) {
  .ime h2 {
    font-size: 15px;
    text-align: center;
  }

  .o-nama-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  .o-nama-container img {
    width: 60%;
    justify-self: center;
  }

  .o-nama-container:nth-of-type(2) {
    display: grid;
    grid-template-columns: 1ff;
    width: 100%;
    justify-content: space-between;
    grid-template-areas:
      "slika2"
      "tekst2";
  }

  .o-nama-container a {
    width: 100%;
    text-align: center;
  }

  .o-nama-container p {
    font-size: 12px;
  }

  .center {
    text-align: center !important;
  }
}
</style>
