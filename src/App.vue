<template>
  <div id="app">
    <Grid></Grid>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Grid from '@/components/grid'
import Header from '@/components/layouts/header'
//import Home from '@/components/section/home/index.vue'

export default {
  name: 'App',
  components: {
    Grid,
    Header
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/layout";
@import "@/assets/scss/main";

#app {
  //min-width: 400px;

}

</style>
