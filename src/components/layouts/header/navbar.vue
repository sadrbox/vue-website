<template>
  <div id="navbar">
    <div class="column">
      <ul class="nav">
        <li><a href="#">Отдел образования</a></li>
        <li><router-link to="/news">Новости</router-link></li>
        <li><a href="#">Методология</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
    <div class="column">
      <ul class="tool">
        <li><router-link to="/" title="Главная страница"><i class="fas fa-home fa-lg"></i></router-link></li>
        <li><a href="#" title="Управление"><i class="fas fa-user-shield"></i></a></li>
        <li class="__divider"></li>
        <li><a href="#" title="Карта сайта"><i class="fas fa-ellipsis-h fa-lg"></i></a></li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";


#navbar {
  display:grid;
  grid-template-columns: 5fr 1fr;
  justify-content: space-evenly;
  //background:rgba(255,255,255,1);
  //box-shadow: 0 5px 5px -5px #333;
  //font-family: 'Roboto', serif;
  //@include font(1.1rem);
  //background: $dark_blue;
  .tool {
    justify-content:flex-end;

    //i{margin-right: 10px;}
  }
  .phone {
    //justify-content:flex-end;
    li>span {
      //font-weight: 100;

    }  
  }
  .nav {
    justify-content:flex-start;
  }
  .nav, .tool, .phone {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    min-height:40px;
  }      


  li {
    margin-right: 20px;
    a {
      text-decoration: underline;
      &:hover{
        text-decoration: none;
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
      //color:#3f51b5;
      //color: #333;
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
