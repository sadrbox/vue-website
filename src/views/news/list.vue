<template>
  <div id="content">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-12 col-l-12 col-m-10 col-s-12 col-xs-12">
          <div class="viewer">
            <div class="__title">Новости</div>
          </div>
          <ul class="list-news">
            <li>
              <div class="__date">20.08.2020</div>
              <router-link class="__link" to="/news/1">Значимость этих проблем настолько очевидна</router-link>
              <div class="__pretext">
                Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют определения и уточнения направлений прогрессивного развития. Товарищи! начало повседневной работы по формированию позиции в значительной степени обуславливает создание модели развития. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки новых предложений. Разнообразный и богатый опыт рамки и место обучения кадров позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. С другой стороны консультация с широким активом позволяет оценить значение систем массового участия. <router-link class="__read-link" to="/news/1">Читать дальше...</router-link>
              </div>
            </li>  
            <li>
              <div class="__date">20.08.2020</div>
              <router-link class="__link" to="/news/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
              <div class="__pretext">
                По своей сути рыбатекст является альтернативой традиционному lorem
                ipsum, который вызывает у некторых людей недоумение при попытках
                прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
                русском языке наполнит любой макет непонятным смыслом и придаст
                неповторимый колорит советских времен. <router-link class="__read-link" to="/news/1">Читать дальше...</router-link>
              </div>
            </li>  
            <li>
              <div class="__date">20.08.2020</div>
              <router-link class="__link" to="/news/1">По своей сути рыбатекст является альтернативой традиционному</router-link>
              <div class="__pretext">
                По своей сути рыбатекст является альтернативой традиционному lorem
                ipsum, который вызывает у некторых людей недоумение при попытках
                прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
                русском языке наполнит любой макет непонятным смыслом и придаст
                неповторимый колорит советских времен. <router-link class="__read-link" to="/news/1">Читать дальше...</router-link>
              </div>
            </li>  
            <li>
              <div class="__date">20.08.2020</div>
              <router-link class="__link" to="/news/1">В отличии от lorem ipsum, текст рыба на
                русском языке наполнит любой макет непонятным смыслом</router-link>
              <div class="__pretext">
                По своей сути рыбатекст является альтернативой традиционному lorem
                ipsum, который вызывает у некторых людей недоумение при попытках
                прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
                русском языке наполнит любой макет непонятным смыслом и придаст
                неповторимый колорит советских времен. <router-link class="__read-link" to="/news/1">Читать дальше...</router-link>
              </div>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

.list-news {

  padding: 0px;
  li {
    //display: block;
    //flex-direction: column;
    //align-items: flex-start;
    //justify-content: stretch;
    padding: 10px;
    border-radius: 4px;
    //border-top:1px solid #888;
    //border-left:1px solid #888;
    //border-right:1px solid #888;
    //border-bottom:3px solid #888;
    //background:#e5e5e5;
    margin-bottom: 20px;
    .__date {
      //font-weight: normal;
      //display:block;
      width:70px;
      text-align:center;
      background: #e9c46a;
      border-radius: 4px;
      padding: 0px 4px;
      //display:inline;
      margin:0px 0px 6px 0;
      //text-align: right;
      //font-weight: normal;
      //@include font(.8rem, 400);
      font-family: 'Oswald';
      color: #333;
    } //@include font(1rem);

    .__link {
      //display:flex;
      color: $blue;
      ////@include font(.9rem);
      //@include font(1rem);
      font-weight: 800;
      text-decoration: none;
      padding: 6px 0;
      //font-family: 'PT Sans', serif;
      &:hover {
        color: red;
        //background: #caf0f8;
        //text-decoration: underline;
      }
    }
    .__pretext {
      //margin-top:10px;
      //color: #444;
      //display:inline-block;
      //@include font(.9rem);
      //font-size: .9rem;
      //line-height: 1.618;
    }
    .__read-link {
      //font-style:italic;
      //font-weight: normal;
      //text-align: right;
      color:$blue;
      text-decoration: none;
      &:hover {
        color: red;
        //background: #caf0f8;
        //text-decoration: underline;
      }
    }
  }
}


</style>
