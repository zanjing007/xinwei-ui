<template>
  <div class="xw-form-item">
    <label class="xw-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="xw-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XwFormItem',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.xw-form-item {
  margin-bottom: 25px;
  .xw-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .xw-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
