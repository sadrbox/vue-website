<template>
  <div id="navbar">
    <div class="container">
      <div class="row">
        <div class="col-xl-1 col-l-1 col-m-1">
          <div class="navbar__logo">
            <img class="navbar__logo__img" src="@/assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="col-xl-11 col-l-11 col-m-11">
          <ul class="nav">
            <!-- <li><a href="#"><i class="fas fa-bars fa-2x"></i></a></li>-->
            <!-- <li><a href="#"><i class="fas fa-home fa-lg"></i></a></li>-->
            <li><a href="#">Навигация</a></li>
            <li><a href="#">Методология</a></li>
            <li><a href="#">Отдел образования</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// <div class="col-xl-2 col-l-2 col-m-3">
// <ul class="navbar__lang">
// <li><a href="#">Kaz</a></li>
// <li><a href="#" class="navbar__lang__link--active">Rus</a></li>
// <li><a href="#">Eng</a></li>
// </ul>
// <ul class="navbar__bars">
// <li><a href="#"><i class="fas fa-bars fa-2x"></i></a></li>
// </ul>
// </div>



</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

#navbar {
  background:rgba(255,255,255,1);
  box-shadow: 0 5px 5px -5px #333;
  //font-family: 'Roboto', serif;
  //@include font(1rem);
  .nav {
    display: flex;
    min-height:60px;
    align-items:center;
    justify-content:flex-end;
    flex:0 0 100%;

    li {
      margin-right:30px;
      &:last-child {
        margin-right:0px;
      }

      a {
        //color:#3f51b5;
        color: #0074d0;
        //color:#333;
        //line-height:30px;
        text-decoration:none;
        font-weight:normal;
        //font-size:1rem;
        //text-shadow:0px -1px 0px #777;
        &:hover {
          text-decoration:underline;
        }
      }
    }
  }
}


.navbar__logo {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  flex:0 0 100%;
}
.navbar__logo__img {
  max-height:40px;
}

.navbar__lang {
  //flex: 0 0 100%;
  //background:rgba(1,1,1,.2);
  //padding: 10px 0px;
  display:flex;
  align-items:center;
  justify-content: flex-end;
  flex:0 0 100%;
  li {
    a {
      //font:600 .9rem 'Roboto', serif;
      justify-content: center;
      padding: 5px;
      border-radius: 3px;
      text-decoration:none;
      color:#3f51b5;
      //background-color: #999;
      min-width:40px;
      text-align:center;
      text-transform:uppercase;
      font-weight:normal;
      &:first-child {
        margin-right: 10px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    .navbar__lang__link--active {
      color:#fff;
      background-color: #03A9F4;
      &:hover {
        text-decoration:none;
        cursor:default;
      }
    }
  }
}

.navbar__bars {
  display:none;
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
}
#navbar, #menu {
  //  display: none;
}
</style>
