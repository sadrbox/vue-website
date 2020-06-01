<template>
  <div id="navbar">
    <div class="navbar__bars">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-m-12">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { faChessQueen } from '@fortawesome/free-solid-svg-iconf'
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab


.navbar__bars {
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
</style>
