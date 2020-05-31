<template>
  <div id="header">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-2 col-l-2 col-m-4 col-s-4 col-xs-2">
          <div class="header__logo">
            <img class="header__logo__img" src="@/assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="col-xl-6 col-l-6 col-m-8 col-s-12 col-xs-12">
          <div class="header__name">
            <h1 class="header__name__title">Отдел образования <br/> Толебийского района</h1>
            <hr class="header__name__border" />
            <h5 class="header__name__subtitle">официальный интернет-ресурс</h5>
          </div>
        </div>
        <div class="col-xl-4 col-l-4">
          Menu
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
  margin-top:20px;
}
.header__logo__img {

}
.header__name {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin:20px
}
.header__name__title{
  @include font(2.4rem, bold);
  text-transform:uppercase;
}
.header__name__subtitle {
  @include font(1rem);
  color: #444;
  text-transform:uppercase;
}

@media all and (max-width:768px) {
  .header__name {
    text-align: center;
    .header__name__title {
      //margin-top: 20px;
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
