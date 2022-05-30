<template>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
</template>

<script lang="ts">
import Vue from "vue"
import {Component,Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue{
  // '-'表示支出，'+'表示收入
  @Prop() readonly value!:string

  selectType(type: string) {
    console.log(type);
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit("update:value",type)
  }

}
</script>

<style lang='scss' scoped>
.types{
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li{
    width: 50%;
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: center;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>