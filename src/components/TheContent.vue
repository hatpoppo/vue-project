<script setup>
import LeftPane from './LeftPane.vue'
import Contents from './Contents.vue'

</script>
<template>
  <div class="content">
  <LeftPane />
  <Contents />

  </div>
</template>
<style>
.content{
  display: flex;
  min-height: 300px;
}
</style>