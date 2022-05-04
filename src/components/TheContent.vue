<script setup>
import LeftPane from "./LeftPane.vue";
import Contents from "./Contents.vue";

import { reactive } from "vue";
const state = reactive({
  user: null,
});
</script>
<template>
  <div class="content">
    {{ state.user }}
    <LeftPane @user-at="(n) => (state.user = n)" />
    <Contents />
  </div>
</template>
<style>
.content {
  display: flex;
  min-height: 300px;
}
</style>
