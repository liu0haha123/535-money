<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :value.sync="record.type"></Types>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Tags :data-source.sync="tags" @update:value="onUpateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,// 类型
  createdAt?:Date // 类
}

@Component({components: {Tags, Notes, Types, NumberPad, Layout},})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '车'];
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,

  };
  recordList: Record[] = JSON.parse(window.localStorage.getItem("recordList")||"[]") ;

  onUpateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    // 单独push的是引用，需要复制对象
    const record2:Record = JSON.parse(JSON.stringify(this.record))
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }

  @Watch("recordList")
  onRecordListChange(){
    window.localStorage.setItem("recordList",JSON.stringify(this.recordList))
  }
}
</script>
<style>
/*  不想被scoped控制全局样式放在上面的单独标签*/
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
