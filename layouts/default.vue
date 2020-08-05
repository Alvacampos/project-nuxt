<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <nuxt-link class="nav-links" to="/">Home</nuxt-link>
      <nuxt-link class="nav-links" to="/help">Help</nuxt-link>
    </b-navbar>
    <nuxt-child />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.loading-spinner {
  align-content: center;
  vertical-align: middle;
  line-height: 90vh;
}
.nav-links {
  margin-left: 5px;
  color: white;
}
</style>
