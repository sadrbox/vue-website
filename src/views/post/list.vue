<template>
  <div id="content">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-12 col-l-12 col-m-12 col-s-12 col-xs-12">
          <div class="viewer">
            <div class="viewer__top">
              <h2 class="viewer__title"><i class="far fa-newspaper"></i>Новости</h2>
            </div>
            <div class="viewer__bottom">
              <div class="list-tool">
                <ul>
                  <li><router-link class="__link green" to="/post/add">Добавить</router-link></li>
                  <li><div class="divider"></div></li>
                </ul>
              </div>
              <div class="list-pagination">
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
              <div class="list-setup">
                <ul>
                  <li><a href="#" class="__link __active"><i class="fas fa-list fa-lg"></i></a></li>
                  <li><a href="#" class="__link"><i class="fas fa-th-list fa-lg"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="list">
            <ul>
              <li>
                <div class="list-item">
                  <i class="far fa-newspaper"></i>
                  <router-link class="list-item__link" to="/post/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
                </div>
                <div class="list-tool">
                  <a href="#" class="list-tool__link blue"><i class="fas fa-pen"></i></a>
                  <a href="#" class="list-tool__link red"><i class="fas fa-trash-restore"></i></a>
                </div>
              </li>  
              <li>
                <div class="list-item">
                  <i class="far fa-newspaper"></i>
                  <router-link class="list-item__link" to="/post/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
                </div>
                <div class="list-tool">
                  <a href="#" class="list-tool__link blue"><i class="fas fa-pen"></i></a>
                  <a href="#" class="list-tool__link red"><i class="fas fa-trash-restore"></i></a>
                </div>
              </li>  
              <li>
                <div class="list-item">
                  <i class="far fa-newspaper"></i>
                  <router-link class="list-item__link" to="/post/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
                </div>
                <div class="list-tool">
                  <a href="#" class="list-tool__link blue"><i class="fas fa-pen"></i></a>
                  <a href="#" class="list-tool__link red"><i class="fas fa-trash-restore"></i></a>
                </div>
              </li>  
              <li>
                <div class="list-item">
                  <i class="far fa-newspaper"></i>
                  <router-link class="list-item__link" to="/post/1">При создании генератора мы использовали небезизвестный универсальный код речей</router-link>
                </div>
                <div class="list-tool">
                  <a href="#" class="list-tool__link blue"><i class="fas fa-pen"></i></a>
                  <a href="#" class="list-tool__link red"><i class="fas fa-trash-restore"></i></a>
                </div>
              </li>  
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

.list {
  li {
    align-items: center;
    display: flex;
    line-height: 30px;
    border-radius: 2px;
    height:30px;
    padding: 3px 10px;
    justify-content: space-between;
    &:hover {
      background: #eee;
      .list-tool {
        display: flex;
      }
    }
    .list-item {
      display: flex;
      align-items: center;
      i { 
        margin-left: 10px;
        color: #000; 
      }
      .list-item__link {
        margin-left: 15px;
      }
    }
    .list-tool {
      display: none;
      .list-tool__link {
        margin-left:10px;
        display:flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        border-radius: 2px;
      }
    }
  }
}


</style>
