<template>
  <div id="grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script></script>
<style lang="scss">
@import "@/assets/scss/_variable";
#grid {
  position: absolute;
  z-index:99999;
  pointer-events: none;
  //margin-left:$gap;
  //max-width: $container-width + px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-evenly;
  align-self: center;
  //gap: 16px;
  //padding: 0 $space;

  div {
    //display: grid;
    //text-align: center;
    //align-items: center;
    //justify-content: center;
    //background: rgba(200,100,100, .2);
    //width: $column;
    margin: 0 10px;
  }
}
</style>
