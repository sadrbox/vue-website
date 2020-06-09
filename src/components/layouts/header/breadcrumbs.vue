<template>
  <div id="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-l-12 col-m-12">
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Новости</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#breadcrumbs {
  //display:flex;
  //flex-direction: column;
  ul {
    display: flex;
    padding: 20px 10px 10px 10px;
    li {
      &::after {
        margin-left: 10px;
        content: "→";
      } 
      &:last-child {
        &::after {
          content: "";
        }
      }
      margin-right: 10px;
      a {
        //font-weight: 400;
        //font-family: 'Roboto Slab', serif;
        color:#014780;
        text-decoration: none;
        &:hover {
          color: red;
          text-decoration: underline;
        }
      }
    }
  }
}

</style>
