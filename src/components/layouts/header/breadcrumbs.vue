<template>
  <div id="breadcrumbs">
    <div class="column">
      <ul>
        <li>
          <router-link to="/post">Новости</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    max-height: 40px;
    min-height: 40px;
    li {
      a {
        display: grid;
        text-decoration: underline;
        //margin-right: 10px;
        &:hover {
          text-decoration: none;
        }
      }
      span {
        display: grid;
        margin: 0 10px;
      }
    }
  }
}
</style>
