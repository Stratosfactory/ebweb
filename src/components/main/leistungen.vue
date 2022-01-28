<template>
  <div>
    <h1>Leistungen</h1>
    <div class="service-container">
      <div class="service" v-for="service in services" :key="service.id">
        <div
          class="service-head"
          :style="{ 'background-image': 'url(' + service.img + ')' }"
        >
          <div class="service-head-layer">
            <h3>{{ service.headline }}</h3>
          </div>
        </div>
        <div class="service-content">
          <p>{{ service.topic }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          headline: "Betonbau",
          topic: "Blunzenbau macht den feinsten Betonbau auf die ganze Welt",
          img: require("../../assets/services/beton.jpeg"),
          expand: false,
        },
        {
          id: 2,
          headline: "Bauleitung",
          topic:
            "Bauleitung und Führung für alle die es nötig haben oder brauchen",
          img: require("../../assets/services/bauleitung.jpg"),
          expand: false,
        },
        {
          id: 3,
          headline: "Bau Consulting",
          topic: "Gute Beratung ist der halbe Bau",
          img: require("../../assets/services/consulting.jpg"),
          expand: false,
        },
        {
          id: 4,
          headline: "Bau Consulting",
          topic: "Gute Beratung ist der halbe Bau",
          img: require("../../assets/services/consulting.jpg"),
          expand: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.service-container {
  display: flex;

  padding-bottom: 10px;

  flex-wrap: wrap;
  margin-bottom: 1vh;
}

.service {
  position: relative;
  width: 90vw;
  height: 20vh;
  margin: 2vh;
  border-radius: 5px;

  margin-bottom: 7vh;
}

.service h3 {
  background: var(--eb-c1);
  color: white;
  padding: 3px;
  width: 95%;
  font-size: 1.5rem;
  border-top: white 1px solid;
  border-right: white 1px solid;
  border-bottom: white 1px solid;
}

.service-head {
  position: relative;
  width: 250px;
  height: 250px;
  background-size: cover;
  z-index: 1001;
  overflow: hidden;
}

.service-head-layer {
  background: rgba(7, 22, 46, 0.623);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
}

.service-content {
  position: relative;
  background: rgb(243, 243, 243);
  height: 250px;
  padding: 0.5% 0.5% 0.5% 150px;
  margin-left: 125px;
  bottom: 80%;
  font-size: 1.1rem;
}

@media only screen and (max-width: 700px) {
  .service {
    position: static;
    width: 100vw;
    height: 40vh;
    margin-left: 0;
    margin-bottom: 10vh;
    overflow: visible;

    margin-right:5px;
  }

  .service-head {
    position: static;
    width: 95vw;
    height: 10vh;
    background-size: cover;
    z-index: 1001;
    margin-top: 10px;
  }

  .service-content {
    
    position: static;

    padding: 0;
    margin: 0;
    font-size: 1rem;
    margin-bottom: 10vh !important;
  }
}
</style>
