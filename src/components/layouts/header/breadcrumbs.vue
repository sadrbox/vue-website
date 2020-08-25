<template>
  <div id="breadcrumbs">
    <div class="column">
      <ul>
        <li><router-link to="/"><img
                         src="https://img.icons8.com/ios-filled/16/000000/booking.png"/></router-link></li>
        <li><span><img src="https://img.icons8.com/ios-filled/20/999999/thick-vertical-line.png"/></span></li>
        <li><router-link to="/"><img src="https://img.icons8.com/ios-filled/16/000000/squared-menu.png"/></router-link></li>
        <li><span><img src="https://img.icons8.com/metro/18/999999/chevron-right.png"/></span></li>
        <li><router-link to="/post">Новости</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variable';

#breadcrumbs {
  background: #d8d8d8;
  //color: #91b0ce;
  color: #adadad;
  //display:flex;
  //flex-direction: column;
  ul {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;    
    justify-content: flex-start;
    max-height:40px;
    min-height:40px;
    li {
      a {
        display: grid;
        text-decoration: underline;
        //margin-right: 10px;
        &:hover{
          text-decoration: none;
        }

      }
      span{
        display:grid;
        margin:0 10px;
      }
    }
  }
}

</style>
