<template>
  <div id="layout">
    <Navbar></Navbar>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from './navbar/index.vue';
import Header from './header/index.vue';
import Content from './content/index.vue';
import Footer from './footer/index.vue';

export default {
  name: 'Layout',
  components:{
    Navbar,
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/layout";
</style>
