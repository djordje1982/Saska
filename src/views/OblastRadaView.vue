<template>
  <div class="oblast-rada">
    <div class="main">
      <section class="navigacija">
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 1 }"
          @click="aktiviraj(1)"
        >
          <p>Privredno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 2 }"
          @click="aktiviraj(2)"
        >
          <p>Stvarno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 3 }"
          @click="aktiviraj(3)"
        >
          <p>Ugovorno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 4 }"
          @click="aktiviraj(4)"
        >
          <p>Intelektualno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 5 }"
          @click="aktiviraj(5)"
        >
          <p>Porodično i nasledno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 6 }"
          @click="aktiviraj(6)"
        >
          <p>Radno pravo</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 7 }"
          @click="aktiviraj(7)"
        >
          <p>Naknada štete i osiguranje</p>
        </div>
        <div
          class="oblast"
          :class="{ aktivna: aktivnoPravo == 8 }"
          @click="aktiviraj(8)"
        >
          <p>Krivično pravo</p>
        </div>
      </section>
      <section class="prava">
        <transition name="switch" mode="out-in" appear>
          <div class="pravo-text" v-if="aktivnoPravo == 1">
            <h1>PRIVREDNO PRAVO</h1>
            <h2>
              PRIVREDNO PRAVO obuhvata oblast trgovinskog prava i kompanijskog
              prava. U ovoj oblasti pružamo usluge:
            </h2>
            <ul>
              <li>osnivanja privrednih društava</li>
              <li>statusne promene</li>
              <li>
                zastupanje pred Agencijom za privredne registre, kao i
                zastupanje u Stečajnom postupku
              </li>
              <li>izradu svih vrsta ugovora u privredi</li>
            </ul>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 2">
            <h1>STVARNO PRAVO</h1>
            <p></p>
            <h2>
              U ovoj oblasti vezano za nepokretnosti pružamo sledeće usluge:
            </h2>
            <ul>
              <li>
                izrada kupoprodajnih ugovora, ugovora o zalozi i ugovora o
                građenju
              </li>
              <li>pribavljanje dozvola i odobrenja za građenje</li>
              <li>zastupanje u parnicama povodom nepokretnosti</li>
              <li>
                savetovanje i zastupanje u postupcima uređenja poljoprivrednog
                zemljišta (komasacija, arondacija, eksproprijacija).
              </li>
            </ul>
            <p>
              Stvarno pravo reguliše pravne odnose povodom stvari i to kako
              pokretnih tako i nepokretnih, deljivih i nedeljivih, budućih itd.
            </p>
            <p>
              Vezano za ostale stvari, sastavljamo sve vrste ugovora (ugovor o
              delu, založne izjave) zastupanje udržavinskim i svojinskim
              parnicama.
            </p>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 3">
            <h1>UGOVORNO PRAVO</h1>
            <p>
              Ugovor je zakon za ugovorne strane i omogućava realizaciju svih
              poslovnih ideja koje su učesnici u poslu želeli da ostvare. Dva
              ili više subjekata u jednom ugovornom procesu treba da artikulišu
              svoje odnose i to tako da dođe do ispunjenja ugovora, a da se u
              slučaju spora svaka strana u dovoljnoj meri zaštiti. Naš glavni
              princip prilikom pravnog savetovanja u ovoj oblasti je da se
              sagleda pre svega konktretan slučaj i njegov pravni okvir, a onda
              i težnje i ciljevi klijenta. Tek se onda pristupa sastavljanju
              ugovora pri čemu se teži optimalnoj zaštiti klijenta.
            </p>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 4">
            <h1>INTELEKTUALNO PRAVO</h1>
            <p>
              Intelektualna svojina je predmet zaštite intelektulanih prava.
              Intelektualna svojina nije konkretno, materijalno vlasništvo nad
              nekim predmetom, već pravo odnosno skup ovlašcenja koje pravni
              poredak zemlje priznaje imaocu prava intelektualne svojine.
              Intelektualna svojina je komercijalizacija i eksploatacija dobara
              na tržištu. Deli se u dve kategorije:
            </p>
            <ol>
              <li>
                Industrijsku svojinu – koja podrazumeva pronalaske (patente),
                žigove, industrijski dizajn, geografske oznake i oznake porekla,
                topografiju integrisanih kola i
              </li>
              <li>
                Autorsko pravo i srodna prava – koje obuhvata dela književnosti,
                nauke i umetnosti. Vršimo zaštitu Vaših autorskih prava i prava
                intelektualne svojine (zaštita prava na patent, žig, model,
                uzorak, geografsku oznaku porekla).
              </li>
            </ol>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 5">
            <h1>PORODIČNO I NASLEDNO PRAVO</h1>
            <p>
              Porodično pravo definiše pojam braka i reguliše bračne i porodične
              odnose kao i institut usvojenja. U vezi sa tim naša kancelarija
              pruža sledeće usluge:
            </p>
            <ul>
              <li>izrada predbračnih i bračnih ugovora</li>
              <li>
                zastupanje u brakorazvodnim parnicama kao i u parnicama povodom
                alimentacionih zahteva
              </li>
              <li>
                zastupanje u postupcima osporavanja odnosno utvrđivanja
                očinstva/materinstva
              </li>
              <li>zastupanje u postupku usvojenja.</li>
            </ul>
            <p>
              Pod nasleđivanjem podrazumeva se prelaz nasledivih prava i obaveza
              sa umrlog lica na druge subjekte – njegove sukcesore. U vezi sa
              tim pružamo sledeće usluge:
            </p>
            <ul>
              <li>sastavljanje testameta</li>
              <li>
                ugovora o doživotnom izdržavanju, kao i ugovora o raspodeli
                imovine za života ostavioca,
              </li>
              <li>
                zastupanje u ostavinskom postupku i podeli nasledničke zajednice
              </li>
            </ul>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 6">
            <h1>RADNO PRAVO</h1>
            <p>
              Radno pravo je naziv za skup pravnih normi kojima se uređuje
              nastanak, sadržina i prestanak radnog odnosa, kao i pravni položaj
              subjekata radnog prava. Naša kancelarija je tu da Vam pomogne u
              izradi ugovora o radu i svih varijacija tog ugovora, kao i da
              pruži savete u vezi radnih odnosa. Zastupamo klijente pred
              Agencijom za mirno rešavanje radnih sporova, i pred sudovima u
              radno-pravnim sporovima.Stranim klijentima pružamo usluge
              zastupanja pred nadležnim organima Republike Srbije u postupku
              dobijanja radne dozvole i boravka.
            </p>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 7">
            <h1>NAKNADA ŠTETE I OSIGURANJE</h1>
            <p>
              Šteta može biti materijalna i nematerijalna. Nadoknada materijalne
              štete je naturalna restitucija i novčana nadoknada. Nadoknada
              nematerijalne štete se vrši u obliku novčane nadoknade, na taj
              način što se oštećenom licu omogućava da za dobijena novčana
              sredstva sebi pribavi neko zadovoljenje. Potraživanje naknade
              nematerijalne štete prelazi na naslednike samo ako je priznato
              pravosnažnom sudskom odlukom ili pismenim sporazumom. Pružamo
              uslugu zastupanja u postupku povodom naknade štete. U vezi sa
              osiguranjem klijente upućujemo u pripremanje neophodne
              dokumentacije za osiguranje imovine i lica, zastupamo u sporovima
              povodom osiguranja, savetujemo u izradi nacrta sporazuma o
              vansudskom poravnanju.
            </p>
          </div>
          <div class="pravo-text" v-else-if="aktivnoPravo == 8">
            <h1>KRIVIČNO PRAVO</h1>
            <p>
              U materiji krivičnog prava pružamo usluge odbrane u pretkrivičnom
              i krivičnom postupku uključujući i savetovanje klijenata u vezi sa
              zaključenjem sporazuma o priznanju krivičnog dela. S druge strane,
              u krivičnom postupku zastupamo i oštećene krivičnim delom i to
              oštećene kao tužioce i oštećene sa imovinskopravnim zahtevom. Lica
              neosnovano lišena slobode savetujemo i zastupamo pred nadležnim
              ministarstvom i pred sudom u postupku naplate odštetnog zahteva.
              Kako članovi našeg tima poseduju i sertifikat o posebnom znanju iz
              oblasti prava deteta i krivičnopravnoj zaštiti maloletnih lica,
              naša advokatska kancelarija pruža i usluge odbrane maloletnih
              učinioca krivičnih dela, tako i zastupanje maloletnih lica
              oštećenih krivičnim delom.
            </p>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aktivnoPravo: 1,
    };
  },
  methods: {
    aktiviraj(id) {
      this.aktivnoPravo = id;
    },
  },
  created() {
    document.title = "PL - Oblast rada";
  },
};
</script>

<style scoped>
.oblast-rada {
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
}

.main {
  width: 100%;
  position: relative;
  min-height: calc(100vh - 70px);
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
  font-weight: 300;
  overflow-y: scroll;
}

.navigacija {
  min-height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  grid-template-areas:
    "privredno stvarno ugovorno intelektualno"
    "porodicno radno naknada krivicno";
  padding: 0 10%;
  justify-items: center;
  align-items: center;
  color: rgb(187, 180, 150);
}

.oblast {
  width: 200px;
  border: 1px solid rgb(187, 180, 150);
  border-radius: 6px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.oblast:hover {
  color: black;
  background-color: rgb(187, 180, 150);
}

.oblast:nth-of-type(1) {
  grid-area: privredno;
}

.oblast:nth-of-type(2) {
  grid-area: stvarno;
}

.oblast:nth-of-type(3) {
  grid-area: ugovorno;
}

.oblast:nth-of-type(4) {
  grid-area: intelektualno;
}

.oblast:nth-of-type(5) {
  grid-area: porodicno;
}

.oblast:nth-of-type(6) {
  grid-area: radno;
}

.oblast:nth-of-type(7) {
  grid-area: naknada;
}

.oblast:nth-of-type(8) {
  grid-area: krivicno;
}

.aktivna {
  background-image: linear-gradient(
    to right bottom,
    rgb(15, 15, 15),
    rgb(187, 180, 150) 45%
  );
  color: black;
  font-weight: 600;
}

.oblast p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
}

.pravo-text {
  width: 100%;
  height: calc(100vh - 270px);
  min-height: 550px;
  padding: 30px 10%;
  color: rgb(187, 180, 150);
}

.pravo-text h1 {
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 40px;
  font-size: 17px;
}
.pravo-text h2 {
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 15px;
}

.pravo-text ul,
.pravo-text ol {
  padding: 10px 50px;
  font-size: 15px;
}

.pravo-text p {
  font-size: 15px;
  text-align: justify;
}

.switch-enter-from {
  opacity: 0;
  transform: translateY(-150px);
}

.switch-leave-to {
  opacity: 0;
  transform: translateY(150px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.45s ease;
}

@media screen and (max-width: 1050px) {
  .oblast {
    width: 140px;
  }

  .oblast p {
    font-size: 11px;
  }
}

@media screen and (max-width: 680px) {
  .navigacija {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px;
    grid-template-areas:
      "privredno stvarno"
      "ugovorno intelektualno"
      "porodicno radno"
      "naknada krivicno";
  }
}
</style>
