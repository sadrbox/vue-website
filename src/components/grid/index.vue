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
  margin: 0 auto;
  height: 0px;
  max-width: $container-width + px;
  display: flex;

  div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    //background: red;
    height: 100vh;
    width: $column;
    margin: 0 $gap;
  }
}
</style>
