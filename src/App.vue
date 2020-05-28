<template>
  <div id="app">
    <Grid></Grid>
    <Layout></Layout>
  </div>
</template>

<script>
import Grid from './components/grid/index.vue'
import Layout from './components/layouts/index.vue'

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

/* develop styling */
#header, #content, #footer {
  [class^="col"]{
    //background: green;
  }
}
#grid > div {
  //background: red;
}
</style>
