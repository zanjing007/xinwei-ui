<template>
  <div class="xw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XwCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
