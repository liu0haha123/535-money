<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text" :placeholder="this.placeholder" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Prop({required:true}) fieldName!:string
  @Prop() placeholder?:string
  @Watch("value")
  onValueChanged(value:string){
    this.$emit("update:value",value)
  }
}
</script>

<style lang='scss' scoped>
.notes {
  background-color: #f5f5f5;
  display: flex;
  font-size: 14px;
  padding-left: 6px;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>