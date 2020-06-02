<template>
  <div id="header">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-2 col-l-2 col-m-3 col-s-4 col-xs-3">
          <div class="header__logo">
            <img class="header__logo__img" src="@/assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="col-xl-6 col-l-6 col-m-9 col-s-12 col-xs-12">
          <div class="header__name">
            <h1 class="header__name__title">Отдел образования <br/> Толебийского района</h1>
            <hr class="header__name__border" />
            <h5 class="header__name__subtitle">официальный интернет-ресурс</h5>
          </div>
        </div>
        <div class="col-xl-4 col-l-4 col-m-12 col-s-12 col-xs-12">
          <div class="header__lang">
            <a href="#" class="header__lang__link">Қаз</a>
            <a href="#" class="header__lang__link header__lang__link--active">Рус</a>
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

.header__logo {
  display:flex;
  align-items: center;
}
.header__logo__img {

}
.header__name {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin:0px
}
.header__name__title{
  @include font(2.4rem, bold);
  text-transform:uppercase;
}
.header__name__border{
  border:none;
  margin: 3px;
}
.header__name__subtitle {
  font:300 12pt 'Roboto', serif;
  @include font(0.7rem);
  color: #444;
  text-transform:uppercase;
}
.header__lang {
  //width: 100%;
  padding: 10px 0px;
  display:flex;
  align-items: flex-start;
  //justify-content:center;
  .header__lang__link {
    font:300 12pt 'Roboto', serif;
    justify-content: center;
    padding: 5px;
    border-radius: 3px;
    text-decoration:none;
    color: #fff;
    background-color: #999;
    min-width:40px;
    text-align:center;
    text-transform:uppercase;
    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .header__lang__link--active {
    background-color: #3f51b5;
  }
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
</style>
