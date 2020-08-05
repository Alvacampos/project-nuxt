<template>
  <div>
    <no-ssr>
      <div v-if="loading" class="loading-spinner">
        <b-spinner class="text-primary" label="Spinning"></b-spinner>
      </div>
    </no-ssr>
    <div v-if="cars.length !== 0">
      <car-gallery :loadError="criticalError" :cars="cars" />
    </div>
    <div v-if="criticalError && !loading">
      <not-found />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarGallery from "@/components/CarGallery";
import NotFound from "@/components/NotFound";

export default {
  name: "Index",
  components: { CarGallery, NotFound },

  fetch() {
    this.$store.dispatch("getCarData");
    this.$store.dispatch("apiTestCall");
  },

  computed: {
    ...mapState(["cars", "criticalError", "loading"])
  }
};
</script>

<style scoped></style>
