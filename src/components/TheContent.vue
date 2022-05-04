<script setup>
import LeftPane from "./LeftPane.vue";
import Contents from "./Contents.vue";

import { reactive } from "vue";
const state = reactive({
  user: 9,
});
</script>
<template>
  <div class="content">
    <LeftPane @user-at="(n) => (state.user = n)" />
    <Contents v-model:user-id="state.user" />
  </div>
</template>
<style>
.content {
  display: flex;
  min-height: 300px;
}
</style>
