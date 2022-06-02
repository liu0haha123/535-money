<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :value.sync="record.type"></Types>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateFormItem"></FormItem>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,// 类型
  createdAt?: Date // 类
}

@Component({components: {FormItem, Tags, Notes: FormItem, Types, NumberPad, Layout},})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;

  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };


  onUpateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateFormItem(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    // 单独push的是引用，需要复制对象
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>
<style>
/*  不想被scoped控制全局样式放在上面的单独标签*/
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
