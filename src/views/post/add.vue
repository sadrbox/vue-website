<template>
  <div id="content">
    <div class="form-part">Новая запись</div>
    <Form></Form>
  </div>
</template>
<script>
import Form from "./form";

export default {
  components: {
    Form
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_variable";

.form-part{
  //font-family: 'Roboto';
  font-weight: 400;
  font-size: 2rem;
  text-transform: uppercase;
  color: #444;
  padding-top: 1rem;
  margin: 0 10px 1rem 10px;
  border-bottom:4px solid #777;

}


.list {
  li {
    align-items: center;
    display: flex;
    line-height: 1.2rem;
    border-radius: 2px;
    height: 30px;
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
        margin-left: 10px;
        display: flex;
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
