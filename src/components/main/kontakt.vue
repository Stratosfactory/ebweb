<template>
  <div>
    <h1>Kontakt</h1>
    <div class="contact-container">
      <div>
        <h3>Ralf Eichhorn Bau- & baumanagement</h3>
        <ul>
          <li>
            <i class="pi pi-home"></i>
            D-04617 Kriebitzsch
          </li>
          <li>
            <i class="pi pi-map"></i>
            Hauptstr. 26
          </li>
          <li>
            <i class="pi pi-envelope"></i>
            <a href="mailto:kontakt@eichhorn-baumanagement.de"
              >kontakt@eichhorn-baumanagement.de</a
            >
          </li>
          <li>
            <i class="pi pi-phone"></i>
            <a href="tel:49152123465">+49 152123465</a>
          </li>
        </ul>
      </div>
      <div>
        <GMapMap
          ref="myMarker"
          :center="{ lat: 51.02394771734619, lng: 12.334758684620967 }"
          :zoom="18"
        >
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
          >
            <GMapInfoWindow>
              <img src="../../assets/EB.svg" />
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        {
          position: {
            lat: 51.02394771734619,
            lng: 12.334758684620967,
          },
        },
      ],
    };
  },
};
</script>

<style>
.vue-map {
  height: 40vh !important;
  width: 50vw !important;
}

@media only screen and (max-width: 700px) {
  .vue-map {
    height: 40vh !important;
    width: 95vw !important;
  }
 
}
</style>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  margin: 1vh 1vw;
}

ul {
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

li {
  padding: 1vh 0;
  color: black;
  font-size: 1.1rem;
}

i {
  margin-right: 10px;
  padding: 6px 6px;
  background: var(--eb-c1);
  color: white;
  font-size: 1.5rem;
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: black;
}

img {
  height: 7vh;
}

@media only screen and (max-width: 700px) {

 .contact-container {
   display: flex;
   flex-direction: column;
  }


}


</style>