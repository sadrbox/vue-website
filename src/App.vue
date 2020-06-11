<template>
  <div id="app">
    <Grid></Grid>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Grid from './components/grid/index.vue'
//import Layout from './components/layouts/index.vue'
//import Home from '@/components/section/home/index.vue'

export default {
  name: 'App',
  components: {
    Grid
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main";

#app {}

</style>
