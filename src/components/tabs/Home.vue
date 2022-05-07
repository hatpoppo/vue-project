<script setup>
import axios from "axios";
import { watch, reactive, ref } from "vue";

const props = defineProps({
  userId: Number,
});
const state = reactive({
  reminders: [],
});
watch(
  () => props.userId,
  async (newUserId, oldUserId) => {
    console.log({ newUserId: newUserId, oldUserId: oldUserId, userId: props.userId });
    axios
      .get(`/api/users/${newUserId}/reminders`)
      .then(function (response) {
        // handle success
        state.reminders = response.data.reminders;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
);
</script>
<template>
  <div class="">userId:{{ props.userId }}</div>
  <h1>Reminders</h1>
  <p v-if="!state.reminders">Loading...</p>
  <ul v-else>
    <li v-for="reminder in state.reminders" :key="reminder.id" :data-id="`${reminder.id}`">
      {{ reminder.text }}
    </li>
  </ul>
</template>
<style></style>
