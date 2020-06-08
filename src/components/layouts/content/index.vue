<template>
  <div id="content">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-6 col-l-7 col-m-8 col-s-12">
          <div class="latest__post">
            <div class="__item">
              <div class="__date">25.05.2020</div>
              <div class="__title">Последняя новость</div>
              <div class="__text">
                Значимость этих проблем настолько очевидна, что рамки и место
                обучения кадров требуют определения и уточнения направлений
                прогрессивного развития. Товарищи! начало повседневной работы по
                формированию позиции в значительной степени обуславливает создание
                модели развития. Равным образом начало повседневной работы по
                формированию позиции представляет собой интересный эксперимент
                проверки новых предложений. Разнообразный и богатый опыт рамки и
                место обучения кадров позволяет выполнять важные задания по
                разработке системы обучения кадров, соответствует насущным
                потребностям. С другой стороны консультация с широким активом
                позволяет оценить значение систем массового участия.
                <br>
                <br>
                Таким
                образом консультация с широким активом влечет за собой процесс
                внедрения и модернизации форм развития. Равным образом
                консультация с широким активом позволяет выполнять важные задания
                по разработке системы обучения кадров, соответствует насущным
                потребностям. Товарищи! дальнейшее развитие различных форм
                деятельности обеспечивает широкому кругу (специалистов) участие в
                формировании соответствующий условий активизации. Значимость этих
                проблем настолько очевидна, что начало повседневной работы по
                формированию позиции способствует подготовки и реализации позиций,
                занимаемых участниками в отношении поставленных задач. С другой
                стороны новая модель организационной деятельности способствует
                подготовки и реализации новых предложений.
                <br>
                <br>
                Разнообразный и
                богатый опыт консультация с широким активом в значительной степени
                обуславливает создание дальнейших направлений развития.
                Повседневная практика показывает, что сложившаяся структура
                организации обеспечивает широкому кругу (специалистов) участие в
                формировании существенных финансовых и административных условий.
                Таким образом постоянное информационно-пропагандистское
                обеспечение нашей деятельности обеспечивает широкому кругу
                (специалистов) участие в формировании соответствующий условий
                активизации. Разнообразный и богатый опыт реализация намеченных
                плановых заданий требуют от нас анализа направлений прогрессивного
                развития.
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-l-1"></div>
        <div class="col-xl-4 col-l-4 col-m-4 col-s-12">
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
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

.layer {
  .__title {
    font-family: 'Roboto Slab', serif;
    @include font(2rem, 400);
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
    @include font(.9rem, 200);
    //font-family: 'Roboto', serif;
    margin-bottom: 10px;
    border-left:2px solid #333; //transparent;
    //background: #e9f5ff;
    //background: #fff;
    //border-radius: 2px;
    padding: 10px;
    text-decoration: none;
    color: #333;
    &:hover { 
      //background: #e9f5ff; 
      background: #fff;
      border-left:2px solid red;
      //border-color:red;
      //box-shadow: 0px -2px 1px 0px #999;
      .__title {
        //color: #f44336;
        //color: #014780;
        //color: #014780;
        color: red;
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

.latest__post {
  .__item {
    padding: 10px;
    .__date {
      font-weight: bold;
      display: none;
    }
    .__title {
      font-family: 'Roboto Slab', serif;
      @include font(1.6rem, bold);
      margin-bottom: 20px;
    }
    .__text{
      //font-family: 'Roboto Slab', serif;
      //@include font(1.1rem);
      //text-align: justify;
    }
  }
}
</style>
