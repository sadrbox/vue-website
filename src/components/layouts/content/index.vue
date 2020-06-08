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
            <a href="#" class="__item-link">
              <div class="__date">25.05.2020</div>
              <div class="__title">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее</div>
            </a>
            <a href="#" class="__item-link">
              <div class="__date">25.05.2020</div>
              <div class="__title">Сайт рыбатекст поможет дизайнеру, верстальщику</div>
            </a>
            <a href="#" class="__item-link">
              <div class="__date">25.05.2020</div>
              <div class="__title">Cгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке</div>
            </a>
            <a href="#" class="__item-link">
              <div class="__date">25.05.2020</div>
              <div class="__title">Bебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке</div>
            </a>
            <a href="#" class="__item-link">
              <div class="__date">25.05.2020</div>
              <div class="__title">Hесколько абзацев более менее осмысленного текста рыбы на русском языке</div>
            </a>
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
    border-bottom:2px solid #333;
    padding-left:10px;
    color: #333;
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

  .__item-link {
    display:flex;
    flex-direction: column;
    @include font(.9rem, 600);
    //font-family: 'Roboto', serif;
    margin-bottom: 10px;
    border-left:2px solid transparent;
    //background: #e9f5ff;
    //background: #fff;
    //border-radius: 2px;
    padding: 10px;
    text-decoration: none;
    color: #777;
    &:hover { 
      //background: #e9f5ff; 
      background: #fff;
      border-left:2px solid #333;
      //border-color:red;
      //box-shadow: 0px -2px 1px 0px #999;
      .__title {
        //color: #f44336;
        //color: #014780;
        color: #333;
        //color: red;
        //text-decoration: underline;
      }
    }
    .__date {
      //font-weight: normal;
      //display:inline;
      //margin-right: 20px;
      //color: #999;
    }
    .__title {
      // background:red;
      text-decoration: none;
      //color: #777;
      //color: #014780;
      &:hover {
        //color: #f44336;
        //text-decoration: underline;
      }
    }
  }
}

</style>
