<template>
  <ul class="tabs" :class="{ [classPrefix + '-tabs']: classPrefix }">
    <li
      v-for="item in dataSource"
      :key="item.value"
      @click="select(item)"
      :class="liClass(item)"
      class="tabs-item"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

type DataSourceItem = { text: string; value: string }

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[]
  @Prop(String) readonly value!: string
  @Prop(String) classPrefix?: string

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value,
    }
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value)
  }
}
</script>

<style lang='scss' scoped>
.tabs {
  background-color: #ededed;
  display: flex;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    display: flex;
    height: 64px;

    align-items: center;
    justify-content: center;
    position: relative;
    &.selected {
      color: #c29366;
    }
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 50%;
      height: 4px;
      background-color: #c29366;
    }
  }
}
</style>