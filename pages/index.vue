<template>
  <div>
    <div v-if="loading" class="loading-spinner">
      <b-spinner class="text-primary" label="Spinning"></b-spinner>
    </div>
    <div v-if="cars.length !== 0">
      <CarGallery :loadError="criticalError" :cars="cars" />
    </div>
    <div v-if="criticalError">
      <NotFound />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarGallery from "@/components/CarGallery";
import NotFound from "@/components/NotFound";

export default {
  name: "Home",
  components: { CarGallery, NotFound },

  fetch() {
    this.$store.dispatch("getCarData");
  },

  computed: {
    ...mapState(["cars", "criticalError", "loading"])
  }
};
</script>

<style scoped></style>
