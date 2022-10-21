<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 100%"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      :minZoom="minZoom"
      :maxZoom="maxZoom"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-overlay :position="center">
      <template v-slot="">
        <div class="overlay-content">
          <img src="../assets/img/004-32.png" alt="" />
        </div>
      </template>
    </ol-overlay>
  </ol-map>
</template>

<script>
import { ref } from "vue";
import markerIcon from "../assets/img/004-32.png";
export default {
  setup() {
    const center = ref([20.407693, 44.774803]);
    const projection = ref("EPSG:4326");
    const zoom = ref(16);
    const maxZoom = ref(21);
    const minZoom = ref(6);
    const rotation = ref(0);
    const marker = ref(markerIcon);
    return {
      center,
      projection,
      zoom,
      rotation,
      marker,
      minZoom,
      maxZoom,
    };
  },
};
</script>
