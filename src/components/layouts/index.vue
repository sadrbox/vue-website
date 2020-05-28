<template>
  <div id="layout">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './header/index.vue';
import Content from './content/index.vue';
import Footer from './footer/index.vue';

export default {
  name: 'Layout',
  components:{
    Header,
    Content,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/layout";
</style>
