<template>
  <div>
    <div class="form-group">
      <div class="form-group__label">
        <label for="label-name">Заголовок</label>
      </div>
      <div class="form-group__field">
        <input type="text" name="label-name" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-group {
  .form-group__label {
    label {}
  }
  .form-group__field {
    input {
      //border-radius: 2px;
      //border:2px solid #666;
      //line-height: 20px;
    }
  }
}
</style>
