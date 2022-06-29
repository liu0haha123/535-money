<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>

    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="输入备注信息"
        :value.sync="record.notes"
      />
    </div>
    <Tags @update:value="record.tags = $event" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import FormItem from '@/components/Money/FormItem.vue'
import { Component } from 'vue-property-decorator'
import recordTypeList from '@/constants/recordTypeList'
import Tabs from '@/components/Tabs.vue'
import Tags from '@/components/Money/Tags.vue'

@Component({
  components: { FormItem, Tabs, Tags, NumberPad, Layout },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList
  }

  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  }
  recordTypeList = recordTypeList

  created() {
    this.$store.commit('fetchRecords')
  }

  onUpdateNotes(value: string) {
    this.record.notes = value
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签')
    }
    this.$store.commit('createRecord', this.record)
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存记账')
      this.record.notes = ''
    }
  }
}
</script>
<style scoped>
/*  不想被scoped控制全局样式放在上面的单独标签*/
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 4px 0;
}
</style>
