<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad  @update:value="onUpdateAmount"></NumberPad>
    <Types :value= "record.type" @update:value="onUpdateType"></Types>
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
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[],
  notes: string,
  type:string,
  amount:number
}

@Component({components: {Tags, Notes, Types, NumberPad, Layout},})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '车'];
  record:Record = {
    tags:[],
    notes:"",
    type:"-",
    amount:0
  }
  onUpateTags(value: string[]) {
    this.record.tags = value
  }

  onUpdateNotes(value: string) {
    this.record.notes = value
  }

  onUpdateType(value: string) {
    this.record.type = value
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value)
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
