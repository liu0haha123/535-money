<template>
  <nav class="nav">
    <router-link to="/money" class="item"  active-class="selected">
      <icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item"  active-class="selected">
      <icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item"  active-class="selected">
      <icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-property-decorator";
export default class Nav extends Vue{
  
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  @extend %outerShadow;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected{
    color: $color-highlight;
  }
}
</style>