<template>
  <div class="xw-switch" :class="{'is-checked': value}" @click="handleClick">
    <input
      class="xw-switch__input"
      type="checkbox"
      :name="name"
      ref="input"
    >
    <span class="xw-switch__core" ref="core">
      <span class="xw-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XwSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      // console.log(this.value)
      // 等待value发生了改变，在setColor
      // 数据修改后，等待DOM更新，在修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        // console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的checkbox
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss">
.xw-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .xw-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .xw-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .xw-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.xw-switch.is-checked {
  .xw-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .xw-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
