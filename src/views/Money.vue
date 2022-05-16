<template>
  <div class="nav-wrapper">
   <div class="content">
     Money组件
   </div>
  <Nav> </Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money',

};
</script>

<style lang='scss' scoped>
.nav-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex-grow: 1;
  overflow: auto;
  border: 1px solid navy;
}
</style>