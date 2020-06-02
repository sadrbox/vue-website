<template>
  <div id="nav">
    <div class="nav__bars">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <div id="menu">
      <div class="container">
        <div class="row">
          <div class="col-m-12">
            test navbar layer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab


.nav__bars {
  position:absolute;
  right: 0px;
  top: 0px;
  border:0px solid red;

  padding: 10px 15px;
  border-radius: 0px 0 0 10px;
  background: #fff;
  color:#333;
  /*
  height: 30px;
  width: 30px;
   */
//display:none;
}
#nav, #menu {
  display: none;
}
</style>
