<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-1 col-l-1 col-m-1 col-s-4 col-xs-3">
        </div>
        <div class="col-xl-9 col-l-9 col-m-9 col-s-12 col-xs-12">
          <div class="header__name">
            <h1 class="header__name__title">Отдел образования <br/> Толебийского района</h1>
            <hr class="header__name__border" />
            <h5 class="header__name__subtitle">официальный интернет-ресурс</h5>
          </div>
        </div>
        <div class="col-xl-4 col-l-4 col-m-12 col-s-12 col-xs-12">
        </div>
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
