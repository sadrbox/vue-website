<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-l-2 col-m-4 col-s-12 col-xs-12">
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
        <div class="col-xl-2 col-l-4">
          Menu
        </div>
        <div class="col-xl-2">contatcs</div>
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
</style>
