<template>
  <div class="form">
    <div class="column">
      <div class="form-group">
        <label for="title">Заголовок</label>
        <input class="s-2" type="text" name="title" v-bind:value="msg" />
      </div>

      <div class="form-group">
        <label for="text">Текст</label>
        <textarea class="" name="text" cols="30" rows="10" v-bind:value="msg"></textarea>
      </div>
    </div>

    <div class="column">

      <div class="form-group">
        <label>Прикрепленные изображения</label>
        <div class="attached-img">
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
          <div class="img"></div>
        </div>
      </div>
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


.attached-img {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  //grid-template-rows: repeat(auto-fill, 100px);
  //justify-content: space-evenly;
  gap: 10px;
}
.img{
  height: 200px;
  background: #ccc;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-group {
  margin: 10px 0;
  display: grid;
  //flex-direction: column;
  //background: red;
  label {
    font-size:18px;
    //line-height: 2rem;
    //font-weight: 400;
    //text-transform: uppercase;
    //color: #333;
  }
  input, textarea {
    font-family: 'Source Sans Pro', sans-serif;
    //font-family: 'Roboto Slab';
    //font-family: 'Helvetica Neue';
    line-height:1.6rem;
    //height:38px;
    font-size: 16px;
    //@include font(14px, 300);
    width: 100%;
    //line-height: 2rem;
    ////font-weight: normal;
    padding: 5px 5px 5px 5px;
    ////font-size: 1rem;
    //background: #fff;
    //padding-top: 5px;
    border: 1px solid #9e9e9e;
    //color: rgba(0, 0, 0, 0.87);
    border-radius: 2px;
    &:focus{
      outline: none;
      border: 1px solid #2196f3;
      border-radius: 2px;
    }
  }
}

</style>
