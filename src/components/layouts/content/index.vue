<template>
  <div id="content">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-l-8 col-m-12 col-s-12">
          <div class="layer">
            <div class="__title">Новости</div>
          </div>
          <div class="latest__news">
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Cгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Bебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Hесколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
        </div>
        <!--
          <div class="col-xl-1 col-l-1">
          <div class="vl"></div>
          </div>
        -->
        <div class="col-xl-4 col-l-4 col-m-12 col-s-12">
          <div class="layer">
            <div class="__title">Новости</div>
          </div>
          <div class="latest__news">
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Cгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Bебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <a class="__link" href="#">
                Hесколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

//<div class="box">
//  <div class="text">
//  <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
//  По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
//  </div>
//  </div>

</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";
.text {
  @include font(1rem);
}

.vl{
  display:flex;
  background:#ccc;
  height:100%;
  width:1px;
  margin: 0 auto;
  //box-shadow:0 0 5px 0px #000;
}
.layer {
  .__title {

    @include font(2rem);
    margin-bottom: 30px;
    border-bottom:1px solid #ccc;
    padding-left:10px;
    //box-shadow: 0px 0px 2px 0px #000;
    //display:flex;
    //flex:0 0 100%;
  }
}
.latest__news {
  @media (max-width: 1200px) {
    .__item {
      flex-direction: column !important;
      .__link {
        margin:0px !important;
      }
    }
  }

  .__item {
    //display:flex;
    //flex-direction: row;
    @include font(.8rem);
    font-family: 'Roboto', serif;
    margin-bottom: 10px;
    //border:0px solid #333;
    //background: #e9f5ff;
    border-radius: 2px;
    padding: 10px;
    //box-shadow: 0px 0px 10px 0px #014780;
    &:hover { background: #e9f5ff; }
    .__date {
      margin-right: 20px;
    }
    .__link {
      // background:red;
      text-decoration: none;
      color: #014780;
      &:hover {
        color: #f44336;
        //text-decoration: underline;
      }
    }
  }
}

</style>
