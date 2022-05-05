<script setup>
import Home from "./tabs/Home.vue";
import Posts from "./tabs/Posts.vue";
import { ref } from "vue";
const currentTab = ref("Home");
const tabs = {
  Home,
  Posts,
};
defineProps({
  userId: Number,
});
</script>
<template>
  <div class="right_pane">
    <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" v-model:user-id="userId" class="tab"></component>
  </div>
</template>
<style>
.right_pane {
  background-color: blanchedalmond;
  min-width: 500px;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
