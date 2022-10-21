<template>
  <div class="kontakt">
    <div class="backdrop" v-if="statusPoruke > 0" @click.self="resetForm">
      <div class="thankyou_message" id="thankyou_message">
        <div class="nosacPor">
          <h2>Hvala što ste nam ste se obratili</h2>
          <h2>Potrudićemo se da Vam odgovorimo u najkraćem roku</h2>
          <br />
          <button @click="resetForm">Povratak</button>
        </div>
      </div>
    </div>
    <div id="mapa" class="mapa">
      <Map />
    </div>

    <div id="kontakt-podaci">
      <h1 id="kontakt-naslov">Advokatska kancelarija Pilčević</h1>

      <div id="adr">
        <img src="../assets/img/address_80px.png" alt="znak adresa" />
      </div>
      <div id="adresa">
        <h3 class="res">Lazaravački drum 10a</h3>
      </div>

      <div id="tel">
        <img src="../assets/img/phone_80px.png" alt="znak telefon" />
      </div>
      <div id="telefon">
        <h3 class="res">+381 63 356 152</h3>
      </div>

      <div id="www">
        <img src="../assets/img/website_80px.png" alt="znak web" />
      </div>
      <div id="web">
        <a class="res" href="https://www.pilceviclaw.rs">www.pilceviclaw.rs</a>
      </div>

      <div id="em">
        <img src="../assets/img/email_sign_80px.png" alt="znak email" />
      </div>
      <div id="e-mail">
        <a class="res" href="mailto:office@pilceviclaw.rs"
          >office@pilceviclaw.rs</a
        >
      </div>

      <div id="linked">
        <img src="../assets/img/linkedin_80px.png" alt="znak LinkedIn" />
      </div>
      <div id="linked1">
        <a
          class="res"
          href="https://rs.linkedin.com/in/aleksandra-pil%C4%8Devi%C4%87-ll-m-0267b845"
          target="_blank"
          >LinkedIn</a
        >
      </div>

      <div id="radnoVreme">
        <img src="../assets/img/clock_80px.png" alt="znak vreme" />
      </div>

      <h3 class="res" id="pon">Ponedeljak - Petak</h3>
      <h3 class="res" id="rvPon">09:00 -17:00</h3>

      <h3 class="res" id="sub">Subota - Nedelja</h3>
      <h3 class="res" id="rvSub">po dogovoru</h3>
    </div>
    <div id="kontakt-forma">
      <h2>Kontaktirajte nas</h2>
      <form
        @submit.prevent="handleFormSubmit"
        ref="form"
        class="gform pure-form pure-form-stacked"
        id="formular"
      >
        <!-- change the form action to your script url -->

        <div class="form-elements">
          <fieldset class="pure-group">
            <input
              id="name"
              name="name"
              required
              placeholder="Vaše ime"
              v-model="name"
            />
          </fieldset>

          <fieldset class="pure-group">
            <input
              id="email"
              name="email"
              type="email"
              required
              v-model="email"
              placeholder="Vaša email adresa"
            />
          </fieldset>

          <fieldset class="pure-group">
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Vaša poruka"
              v-model="message"
            ></textarea>
          </fieldset>

          <button>Pošaljite poruku</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
export default {
  components: {
    Map,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      statusPoruke: 0,
    };
  },
  methods: {
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.statusPoruke = 0;
    },
    getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements)
        .filter(function (k) {
          return elements[k].name !== "honeypot";
        })
        .map(function (k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function (item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      // console.log(formData);
      return formData;
    },
    handleFormSubmit() {
      this.statusPoruke = 200;
      // handles form submit without any jquery
      // event.preventDefault(); // we are submitting via xhr below
      var form = this.$refs.form;
      var data = this.getFormData(form); // get the values submitted in the form

      /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */

      var url =
        "https://script.google.com/macros/s/AKfycbzJo9nG0gBvOwZLsLOKpQxZOYuhdWgCG8xVd-l8Bg/exec";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);

        console.log(this.statusPoruke);

        return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function (k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    },
  },
  created() {
    document.title = "PL - Kontakt";
  },
};
</script>

<style scoped>
.kontakt {
  width: 100%;
  min-height: 100vh;
  padding: 100px 10% 50px 10%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "mapa1 mapa1"
    "kontaktPodaci kontaktForma";
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 10, 10, 0.7),
      rgba(10, 10, 10, 0.7)
    ),
    url("../assets/img/bg4.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
}

#mapa {
  grid-area: mapa1;
  position: absolute;
  width: 80%;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgb(187, 180, 150);
}

#kontakt-podaci {
  margin-top: 30px;
  border-radius: 10px;
  grid-area: kontaktPodaci;
  background-color: rgba(0, 0, 0, 0.6);
  /*border: 1px solid rgb(187, 180, 150);*/
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  display: grid;
  height: 500px;
  grid-template-columns: 1fr 1.4fr;
  grid-template-rows: repeat(1fr, 9);
  grid-template-areas:
    "kontakt-naslov kontakt-naslov"
    "adr adresa"
    "tel telefon"
    "www web"
    "em email"
    "linked linked1"
    "radnoVreme pon"
    "radnoVreme rvPon"
    "radnoVreme sub"
    "radnoVreme rvSub";
  justify-content: center;
  align-items: center;
  color: rgb(187, 180, 150);
}

#kontakt-podaci div {
  margin-top: 20px;
}

#kontakt-podaci h3 {
  font-size: 16px;
  font-weight: 300;
  vertical-align: middle;
}

#kontakt-podaci a {
  color: rgb(187, 180, 150);
  font-size: 16px;
  font-weight: 300;
  vertical-align: middle;
}

#kontakt-podaci img {
  height: 35px;
  width: 35px;
}

#kontakt-naslov {
  grid-area: kontakt-naslov;
  font-size: 20px;
  font-weight: 300;
  color: rgb(187, 180, 150);
  text-align: center;
}

#radnoVreme {
  text-align: right;
  padding-right: 20px;
}

#adr {
  grid-area: adr;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

#adresa {
  grid-area: adresa;
  text-align: left;
}

#tel {
  grid-area: tel;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

#telefon {
  grid-area: telefon;
  text-align: left;
}

#em {
  grid-area: em;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

#email {
  grid-area: email;
}

#linked {
  grid-area: linked;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

#linked1 {
  grid-area: linked1;
}

#www {
  grid-area: www;
  display: flex;
  justify-content: right;
  padding-right: 20px;
}

#web {
  grid-area: web;
}

#radnoVreme {
  grid-area: radnoVreme;
  margin-top: 20px;
}

#pon {
  grid-area: pon;
  margin-top: 20px;
  padding-right: 20px;
}

#sub {
  grid-area: sub;
  margin-top: 10px;
}

#rvPon {
  grid-area: rvPon;

  padding-right: 20px;
}

#rvSub {
  grid-area: rvSub;
}

#kontakt-forma {
  margin-top: 30px;
  height: 500px;
  grid-area: kontaktForma;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(187, 180, 150);
  position: relative;
}

form {
  width: 95%;
}

.form-elements {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.pure-group {
  width: 95%;
  margin-top: 40px;
  position: relative;
  border: none;
}

.form__label {
  position: absolute;
  bottom: 8px;
  left: 9px;
  opacity: 1;
  font-size: 13px;
  font-weight: inherit;
  vertical-align: bottom;
}

.form__label1 {
  position: absolute;
  top: 5px;
  left: 9px;
  opacity: 1;
  font-size: 13px;
  font-weight: inherit;
  vertical-align: bottom;
}

#kontakt-forma h2 {
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  letter-spacing: 2px;
}

#name,
#message,
#email {
  width: 100%;
  background-color: transparent;
  color: rgb(187, 180, 150);
  border: 1px solid rgb(187, 180, 150);
  border-radius: 5px;
  padding: 8px;
  resize: none;
  font-size: 15px;
  font-family: inherit;
  font-weight: 300;
}

button {
  padding: 8px;
  background: rgb(187, 180, 150);
  border: 1px solid rgb(187, 180, 150);
  color: rgb(15, 15, 15);
  border-radius: 5px;
  font-weight: inherit;
  font-family: inherit;
  margin: 15px auto;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: rgb(15, 15, 15);
  color: rgb(187, 180, 150);
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
}

.nosacPor {
  background-color: rgb(15, 15, 15);
  border: 1px solid rgb(187, 180, 150);
  color: rgb(187, 180, 150);
  border-radius: 10px;
  font-weight: 300;
  width: 350px;
  height: 200px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.nosacPor h2 {
  font-weight: 300;
  text-align: center;
  font-size: 12px;
}

.nosacPor button {
  margin-top: 30px;
  color: rgb(187, 180, 150);
  text-align: center;
  padding: 10px 20px;
  border: 1px solid rgb(187, 180, 150);
  border-radius: 7px;
  font-size: 12px;
  transition: all 0.4s ease;
  background-color: rgb(15, 15, 15);
}

.nosacPor button:hover {
  color: rgb(15, 15, 15);
  background-color: rgb(187, 180, 150);
}

.form {
  width: 95%;
}

input {
  outline: none;
}

@media screen and (max-width: 1050px) {
  .kontakt {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80vh auto auto;
    grid-template-areas:
      "mapa1"
      "kontaktPodaci"
      "kontaktForma";
  }

  #kontakt-podaci {
    width: 100%;
  }
}

@media screen and (max-width: 680px) {
  .kontakt {
    padding: 100px 3%;
  }

  .res {
    font-size: 12px !important;
  }
}
</style>
