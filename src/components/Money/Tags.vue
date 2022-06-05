<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag) >=0}">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2';

@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const name = window.prompt('请输入要新增的标签');
    if (!name) {
      // todo 这里有bug，直接取消还是会添加一个空的标签
      return window.alert('标签名不能为空');
    }
    store.createTag(name);
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

    > li {
      $bg: #d9d9d9;
      background-color: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 4px;

      &.selected {
        background-color: darken($bg, 50%);
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background-color: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}

</style>