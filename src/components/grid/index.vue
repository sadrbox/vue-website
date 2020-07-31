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
  margin: 0 auto;
  max-width: $container-width + px;
  width: 100%;
  display: flex;
  align-self: center;

  div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    //background: rgba(200,100,100, .2);
    height: 100vh;
    width: $column;
    margin: 0 $space;
  }
}
</style>
