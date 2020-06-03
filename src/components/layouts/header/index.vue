<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-l-1 col-m-1">
        </div>
        <div class="col-xl-10 col-l-8 col-m-8 col-s-8 col-xs-8">
          <div class="header__name">
            <h2>Толебийский район</h2>
            <h1 class="header__name__title">Отдел образования</h1>
            <hr class="header__name__border" />
            <h3 class="header__name__subtitle">официальный интернет-ресурс</h3>
          </div>
        </div>
        <div class="col-xl-2 col-l-2 col-m-2 col-s-4 col-xs-4">
          <div class="navbar__logo">
            <img class="navbar__logo__img" src="@/assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="col-l-1 col-m-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

#header {
  margin: 40px 0;
}

.header__name {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin:0px;
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
.header__name__subtitle {
  //font:300 12pt 'Roboto', serif;
  @include font(0.8rem);
  color: #444;
  text-transform:uppercase;
}


.navbar__logo {
  display:flex;
  align-items: center;
  justify-content: center;
  flex:0 0 100%;
}
.navbar__logo__img {
  //max-height:45px;
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
