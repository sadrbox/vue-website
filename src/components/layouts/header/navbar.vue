<template>
  <div id="navbar">
    <div class="container">
      <div class="row">
        <!--
          <div class="col-xl-2 col-l-2 col-m-10">
          <ul class="phone">
          <li><span>+7 (72522) 23-24-25</span></li>
          </ul>
          </div>
          <router-link to="/home">Home</router-link>
        -->
        <div class="col-xl-8 col-l-8 col-m-8">
          <ul class="nav">
            <!-- <li><a href="#"><i class="fas fa-bars fa-2x"></i></a></li>-->
            <!-- <li><a href="#"><i class="fas fa-home fa-lg"></i></a></li>-->
            <li><a href="#">Отдел образования</a></li>
            <li class="__divider"></li>
            <li><router-link to="/news">Новости</router-link></li>
            <li class="__divider"></li>
            <li><a href="#">Методология</a></li>
            <li class="__divider"></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div class="col-xl-4 col-l-4 col-m-4">
          <ul class="tool">
            <li><router-link to="/" title="Главная страница"><i class="fas fa-home fa-lg"></i></router-link></li>
            <li class="__divider"></li>
            <li><a href="#" title="Управление"><i class="fas fa-user-shield"></i></a></li>
            <li class="__divider"></li>
            <li><a href="#" title="Карта сайта"><i class="fas fa-ellipsis-h fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//<div class="navbar__logo">
//  <img class="navbar__logo__img" src="@/assets/img/logo.png" alt="">
//  </div>

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
  //background:rgba(255,255,255,1);
  box-shadow: 0 5px 5px -5px #333;
  //font-family: 'Roboto', serif;
  //@include font(1.1rem);
  background: $dark_blue;
  .tool {
    justify-content:flex-end;

    //i{margin-right: 10px;}
  }
  .phone {
    justify-content:flex-end;
    li>span {
      //font-weight: 100;

    }  
  }
  .nav {
    justify-content:flex-start;
  }
  .nav, .tool, .phone {
    display: flex;
    min-height:60px;
    align-items:center;
    flex:0 0 100%;
    padding: 0 10px;
    .__divider {
      background: rgba(200, 200, 200, 0.5);
      height:30%;
      width: 1px;
    }      

    li {
      margin-right:20px;
      &:last-child {
        margin-right:0px;
      }

      a {
        color:#fff;
        //color: #0074d0;
        //color: rgba(255, 255, 255, 0.5);
        //color:#333;
        //line-height:30px;
        //font-size: .9rem;
        text-transform: uppercase;
        text-decoration:none;
        font-weight:bold;

        &:hover {
          text-decoration:underline;
        }
      }
      span { 

        font-weight: bold;
        color: #fff; 
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
