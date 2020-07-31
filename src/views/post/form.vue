<template>
  <div class="form">
    <div class="form-group">
      <label for="title">Заголовок</label>
      <input class="" type="text" name="title" v-bind:value="msg" />
    </div>
    <div class="form-group">
      <label for="text">Текст</label>
      <textarea class="" name="text" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Район образован 1 февраля 1932 года из части ликвидированного Чимкентского района как Бадамский район Южно-Казахстанской области, центр района — город Чимкент",
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
