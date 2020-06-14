<template>
  <div id="content">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-8 col-l-8 col-m-4 col-s-12 col-xs-12">
          <div class="viewer">
            <div class="__top">
              <div class="__label">
                <i class="far fa-newspaper"></i>
                <h1>Новости</h1>
              </div>
            </div>
            <div class="__bottom">
              <div class="__manage-tool">
                <ul>
                  <li><a href="#" class="__link"><i class="fas fa-plus-circle"></i></a></li>
                </ul>
              </div>
              <div class="__list-setup">
                <ul>
                  <li><div class="divider"></div></li>
                  <li><a href="#" class="__link __active"><i class="fas fa-list"></i></a></li>
                  <li><a href="#" class="__link"><i class="fas fa-th-list"></i></a></li>
                  <li><div class="divider"></div></li>
                </ul>
              </div>
              <div class="__pagination">
                <ul>
                  <li><a href="#" class="__link"><i class="fas fa-arrow-left"></i></a></li>
                  <li><a href="#" class="__link">1</a></li>
                  <li><a href="#" class="__link">2</a></li>
                  <li><a href="#" class="__link">3</a></li>
                  <li><a href="#" class="__link __active">4</a></li>
                  <li><a href="#" class="__link">5</a></li>
                  <li><a href="#" class="__link"><i class="fas fa-arrow-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="list-news">
            <ul>
              <li>
                <router-link class="__link" to="/news/1">Значимость этих проблем настолько очевидна</router-link>
              </li>  
              <li>
                <div>
                  <span class="__date">20.08.2020</span>
                </div>
                <router-link class="__link" to="/news/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
              </li>  
              <li>
                <div>
                  <span class="__date">20.08.2020</span>
                </div>
                <router-link class="__link" to="/news/1">По своей сути рыбатекст является альтернативой традиционному</router-link>
              </li>  
              <li>
                <div>
                  <span class="__date">20.08.2020</span>
                </div>
                <router-link class="__link" to="/news/1">В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом</router-link>
              </li>  
            </ul>
          </div>
        </div>
        <div class="col-xl-4 col-l-4 col-m-4 col-s-12 col-xs-12">
          <div class="layer">
            <div class="__label">
              <h3>Фильтр</h3>
            </div>
          </div>
          <div class="filter-setup">
            <ul>
              <li><a href="#" class="__link __active"><i class="fas fa-list"></i></a></li>
              <li><a href="#" class="__link"><i class="fas fa-th-list"></i></a></li>
            </ul>
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

.list-news {
  padding: 10px;
  li {
    align-items: center;
    display: flex;
    line-height: 1.2rem;
    //flex-direction: column;
    //align-items: flex-start;
    //justify-content: stretch;
    //padding: 10px;
    border-radius: 4px;
    //border-top:1px solid #888;
    //border-left:1px solid #888;
    //border-right:1px solid #888;
    //border-bottom:3px solid #888;
    //background:#e5e5e5;
    margin-bottom: 10px;
    .__date {
      display: none;
      //line-height: 1.2rem;
      font-weight: normal;
      //display:block;
      //width:80px;
      text-align:center;
      //background: #e9c46a;
      border-radius: 2px;
      //padding: 3px 4px;
      //display:inline;
      margin:0px 10px 0px 0;
      //text-align: right;
      //font-weight: bold;
      //@include font(.8rem, 800);
      //font-family: 'Oswald';
      //color: #333;
      //font-size: .8rem;
    } 

    .__link {
      //display:flex;
      color: $blue;
      ////@include font(.9rem);
      //@include font(1rem);
      font-weight: 400;
      text-decoration: none;
      //padding: 6px 0;
      //font-family: 'PT Sans', serif;

      //line-height: 1.2rem;

      &:hover {
        color: red;
        //background: #caf0f8;
        text-decoration: underline;
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
