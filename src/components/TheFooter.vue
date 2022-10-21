<template>
  <footer class="futer">
    <div id="futer-logo">
      <h2>Advokatska kancelarija Pilčević</h2>
    </div>
    <div id="futer-dole">
      <div id="futer-dole-levo">
        <div class="adresa">
          <a href="mailto:office@pilceviclaw.rs">office@pilceviclaw.rs</a>
        </div>

        <div class="adresa1">
          <p>Lazarevački drum 10a, Beograd</p>
          <p>Telefon: +381 63 356 152</p>
        </div>
      </div>
      <div id="futer-dole-desno">
        <div id="radno-vreme">
          <p>Radno vreme:</p>
        </div>
        <div id="radno-vreme1">
          <p>Ponedeljak - Petak</p>
          <p>09:00 - 17:00</p>
        </div>
        <div id="radno-vreme2">
          <p>Subota - Nedelja</p>
          <p>Po dogovoru</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.futer {
  position: relative;
  width: 100%;
  background-color: rgb(15, 15, 15);
  padding: 0 10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.8fr;
  justify-content: center;
  align-items: center;
  color: rgb(187, 180, 150);
  text-align: center;
}

#futer-logo {
  position: relative;
}

#futer-logo h2 {
  font-size: 20px;
}

#futer-dole {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-bottom: 30px;
}

#futer-dole a {
  color: rgb(187, 180, 150);
}

#futer-dole-levo {
  position: relative;
  align-items: center;
  justify-content: center;
}

#futer-dole-desno {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 3);
}

#radno-vreme {
  grid-column: 1/3;
  grid-row: 1/2;
}

@media screen and (max-width: 680px) {
  #futer {
    grid-template-rows: 1fr 7fr;
  }

  #futer-dole {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }

  #futer-dole-desno {
    margin-top: 30px;
  }
}
</style>
