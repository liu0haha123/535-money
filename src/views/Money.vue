<template>
    <Layout class-prefix="layout">
      <NumberPad> </NumberPad>
      <Types :xxx="12"></Types>
      <Notes></Notes>
      <Tags></Tags>
    </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad, Layout},
};
</script>
<style>
/*  不想被scoped控制全局样式放在上面的单独标签*/
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
