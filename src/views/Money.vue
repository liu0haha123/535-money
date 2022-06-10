<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"></FormItem>
    </div>
    <Tags></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
import Tags from '@/components/Money/Tags.vue';

@Component({
  components: {FormItem, Tabs, Tags, NumberPad, Layout},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  recordTypeList = recordTypeList;

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }


  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }

}
// TODO 这里的样式有坑
</script>
<style scoped>

/*  不想被scoped控制全局样式放在上面的单独标签*/
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
