<template>
  <div id="navbar">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-l-2 col-m-2">
          <div class="logo"></div>
        </div>
        <div class="col-xl-10 col-l-10 col-m-10">
          <ul class="nav">
            <li><a href="#">nav item1</a></li>
            <li><a href="#">nav item2</a></li>
            <li><a href="#">nav item3</a></li>
            <li><a href="#">nav item4</a></li>
          </ul>
        </div>
        <div class="col-m-12">
          <div class="navbar__bars">
            <i class="fas fa-bars fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab

#navbar {
  background:red;
  .navbar__bars {display:none;}
  .nav {
    display: flex;
    height:60px;
    align-items:center;
    li {
      margin-right:30px;
      a {
        line-height:30px;
        //   @include font(1rem);
      }
    }
  }
}

.navbar__bars {
  //position:absolute;
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
#navbar, #menu {
  //  display: none;
}
</style>
