<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-l-8 col-m-6 col-s-12">
          <div class="box">
            <div class="header-website">
              <img class="header-website__logo" src="@/assets/img/logo.png" alt="">
              <div class="header-website__name">
                <h1 class="header-website__name__title">Отдел образования <br/> Толебийского района</h1>
                <h5 class="header-website__name__subtitle">официальный интернет-ресурс</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-l-4 col-m-6">
          Menu
        </div>
        <div class="col-xl-3">contatcs</div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.header-website {
  display:flex;
}
.header-website__logo {
  height: 100px;
  width: auto;
}
.header-website__name {
  display:flex;
  flex-direction:column;
  justify-content:center;
  //line-height: 2rem;
  padding-left:20px;
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
