<template>
  <div id="content">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-7 col-l-7 col-m-10 col-s-10">
          <div class="box__title">Новости</div>
          <div class="box__news">
            <div class="box__news__item">
              <div class="box__news__item__date">25.05.2020</div>
              <a class="box__news__item__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <div class="box__news__item__date">25.05.2020</div>
              <a class="box__news__item__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <div class="box__news__item__date">25.05.2020</div>
              <a class="box__news__item__link" href="#">
                Cгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <div class="box__news__item__date">25.05.2020</div>
              <a class="box__news__item__link" href="#">
                Bебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <div class="box__news__item__date">25.05.2020</div>
              <a class="box__news__item__link" href="#">
                Hесколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-1 col-l-1">
          <div class="vl"></div>
        </div>
        <div class="col-xl-4 col-l-4 col-m-10 col-s-10">
          <div class="box__title">Объявления</div>
          <div class="box__news">
            <div class="box__news__item">
              <a class="box__news__item__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <a class="box__news__item__link" href="#">
                Сайт рыбатекст поможет дизайнеру, верстальщику
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <a class="box__news__item__link" href="#">
                Cгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <a class="box__news__item__link" href="#">
                Bебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке
              </a>
            </div>
          </div>
          <div class="box__news">
            <div class="box__news__item">
              <a class="box__news__item__link" href="#">
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
.box__title {
  @include font(2rem);
  margin-bottom: 30px;
  border-bottom:1px solid #ccc;
  //box-shadow: 0px 0px 2px 0px #000;
  //display:flex;
  //flex:0 0 100%;
}
.box__news {
  @media (max-width: 1200px) {
    .box__news__item {
      flex-direction: column !important;
      .box__news__item__link {
        margin:0px !important;
      }
    }
  }

  .box__news__item {
    display:flex;
    flex-direction: row;
    //@include font(.89rem);
    //font-family: 'Roboto', serif;
    margin-bottom: 30px;
    //border:0px solid #333;
    background: #fff;
    //border-radius: 2px;
    //padding: 10px;
    //box-shadow: 0px 0px 2px 0px #000;
    .box__news__item__date {
      margin-right: 20px;
    }
    .box__news__item__link {
      text-decoration: none;
      color: #0074d0;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>
