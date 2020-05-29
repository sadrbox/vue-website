<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-l-2 col-m-2 col-s-12 col-xs-12">
          <div class="header__logo">
            <img class="header__logo__img" src="@/assets/img/logo.png" alt="">
          </div>
        </div>
        <div class="col-xl-6 col-l-6 col-m-6 col-s-12 col-xs-12">
          <div class="header-top">
            <div class="header-website__name">
              <h1 class="header-website__name__title">Отдел образования <br/> Толебийского района</h1>
              <h5 class="header-website__name__subtitle">официальный интернет-ресурс</h5>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-l-4 col-m-4">
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
.header-top {
  display:flex;
}
.header-top {
  //height: 100px;
  //width: auto;
}
.header-top__logo {
  display:flex;
  //flex-direction:column;
  //justify-content:center;
  //line-height: 2rem;
  //padding-left:20px;
  //width: 128px;
}
.header-top__logo__img {
  //height: 128px;
  //width: 128px;
}
.header-website__name__title {
  text-transform:uppercase;
  font-size:22pt;
  line-height:2.4rem;
  //font-weight:bold;
}
.header-website__name__subtitle {
  //text-align:center;
  color: #777;
  font-size: 10pt;
  text-transform:uppercase;
}
</style>
