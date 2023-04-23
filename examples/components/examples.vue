<template>
  <div class="examples">
    <h2>按钮</h2>
    <xw-button>默认</xw-button>
    <xw-button type="primary">按钮</xw-button>
    <xw-button type="success">按钮</xw-button>
    <xw-button type="info">按钮</xw-button>
    <xw-button type="warning">按钮</xw-button>

    <h2>选择</h2>
    <xw-checkbox v-model="checkValue"></xw-checkbox>
  </div>
</template>

<script>
export default {
  name: 'examples',
  data () {
    return {
      checkValue: ''
    }
  }
}
</script>

<style scoped lang="scss">
.examples {
  .xw-button {
    margin-right: 12px;
  }
}
</style>
