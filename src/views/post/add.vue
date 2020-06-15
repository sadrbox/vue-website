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
                  <li><router-link class="__link yellow" to="/post/add">OK</router-link></li>
                  <li><router-link class="__link" to="/post/add">Сохранить</router-link></li>
                  <li><div class="divider"></div></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="list">
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
    line-height: 1.2rem;
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
        margin-left: 5px;
        color: #444; 
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
