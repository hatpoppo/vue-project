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
  async (newword, oldword) => {
    axios
      .get("/api/reminders")
      .then(function (response) {
        // handle success
        console.log(response);
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
  <div class="">home userId:{{ props.userId }}</div>
</template>
<style></style>
