<template>
  <b-card
    :title="cardTitle()"
    :img-src="car.img"
    :img-alt="car.name"
    img-top
    class="mb-2 car-card"
  >
    <b-card-text>{{ car.description }}</b-card-text>
    <nuxt-link to="/CarsDetails">
      <b-button @click="analytics" variant="primary">Hop in!</b-button>
    </nuxt-link>
  </b-card>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    car: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    cardTitle() {
      return this.car.brand + " - " + this.car.name;
    },
    analytics() {
      this.$store.dispatch("favorite", this.car.id);
    }
  }
};
</script>

<style lang="css" scoped>
.car-card {
  max-width: 20rem;
}
.car-card img {
  height: 20vh;
}
</style>
