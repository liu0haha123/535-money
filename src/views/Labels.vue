<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Button from '@/components/Button.vue'
import { mixins } from 'vue-class-component'
import TagHelper from '@/mixins/TagHelper'

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList
  }
  created() {
    this.$store.commit('fetchTags')
  }
  createTag() {
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
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #666;
      margin-right: 16px;
      width: 20px;
      height: 20px;
    }
  }
}

.createTag {
  background-color: #767676;
  color: white;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
    button {
      background: #06f;
      color: #fff;
      font-size: 14px;
      font-weight: normal;
      padding: 8px 36px;
      border-radius: 64px;
    }
  }
}
</style>