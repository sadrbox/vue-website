<template>
  <div id="app">
    <Grid></Grid>
    <Home></Home>
    <Layout></Layout>
  </div>
</template>

<script>
import Grid from './components/grid/index.vue'
import Layout from './components/layouts/index.vue'
//import Home from '@/components/section/home/index.vue'

export default {
  name: 'App',
  components: {
    Grid,
    Layout
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main";

#app {}

</style>
