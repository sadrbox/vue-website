<template>
  <div>
    <Navbar></Navbar>
    <div id="header">
      <div class="container">
        <div class="row centered">
          <div class="col-xl-12 col-l-12 col-m-10 col-s-10">
            <div class="header__name">
              <h2>Толебийский район</h2>
              <h1 class="header__name__title">Отдел образования</h1>
              <!--<hr class="header__name__border" />-->
              <!--<h3 class="header__name__subtitle">официальный интернет-ресурс</h3>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Breadcrumbs></Breadcrumbs>
  </div>
</template>
<script>

import Navbar from './navbar.vue';
import Breadcrumbs from './breadcrumbs.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Breadcrumbs
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

#header {
  display: none;
  padding: 40px 0;
  //background: $dark_blue;
  //color: #fff;
  //background-image: linear-gradient(to top, #fff, #014780 10%);
}

.header__name {
  font-family: 'Roboto Slab', serif;
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding:0 10px;
  //background:rgba(1,1,1,.2);
}
h2 {
  @include font(2rem, bold);
  text-transform:uppercase;
}
.header__name__title{
  @include font(2.8rem, bold);
  text-transform:uppercase;
}
.header__name__border{
  border:none;
  margin: 3px;
}
h3.header__name__subtitle {
  font:300 12pt 'Roboto', serif;
  //@include font(0.8rem);
  //color: #444;
  text-transform:uppercase;
}



/* In resize display */
@media all and (min-width:769px) {
  .header__lang__link {
  }
}
@media all and (max-width:768px) {
  .header__logo {
    margin-top:20px;
  }
  .header__name {
    text-align: center;
    .header__name__title {
    }
    .header__name__border{
      border:1px solid #ccc;
      border-radius: 100px;
      margin: 20px;
    }
    .header__name__subtitle {

    }
  }
}
#header {
  // display: none;
}
</style>
