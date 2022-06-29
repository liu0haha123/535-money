<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        @click="toggle(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import TagHelper from '@/mixins/TagHelper'

@Component
export default class Tags extends mixins(TagHelper) {
  get tagList() {
    return this.$store.state.tagList
  }
  selectedTags: string[] = []
  created() {
    this.$store.commit('fetchTags')
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag)
    if (index >= 0) {
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags.push(tag)
    }
    this.$emit('update:value', this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入要新增的标签')
    if (!name) {
      return window.alert('标签名不能为空')
    }
    this.$store.commit('createTag', name)
  }
}
</script>

<style lang='scss' scoped>
.tags {
  background-color: white;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    padding: 16px;
    flex-wrap: wrap;
    $bg: #d9d9d9;
    > li {
      background-color: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 4px;

      &.selected {
        position: relative;
        background: rgba(0, 102, 255, 0.15);
        color: #06f;
        font-weight: 400;
        ::after {
          content: '';
          width: 100%;
          height: 100%;
          border: 1px solid #06f;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 16px;
        }
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: none;
      color: #06f;
      padding: 2px 6px;
      border: 1px solid;
      border-radius: 18px;
      font-size: 14px;
      margin-left: 16px;
    }
  }
}
</style>