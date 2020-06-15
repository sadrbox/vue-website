<template>
  <div id="breadcrumbs">
    <div class="container">
      <div class="row centered">
        <div class="col-xl-12 col-l-12 col-m-10 col-s-12 col-xs-12">
          <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="/post">Новости</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variable';

#breadcrumbs {
  // background: #ccc;
  //display:flex;
  //flex-direction: column;
  ul {
    display: flex;
    padding: 20px 10px 20px 10px;
    li {
      &::after {
        margin-left: 10px;
        //content: "→";
        //content: '<i class="fas fa-chevron-right"></i>';
      } 
      &:last-child {
        &::after {
          content: "";
        }
      }
      margin-right: 10px;
      a {
        text-transform: uppercase;
      }
    }
  }
}

</style>
