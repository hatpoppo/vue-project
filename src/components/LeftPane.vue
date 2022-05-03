<script setup>
import axios from "axios";
import { onMounted,reactive } from "vue";
const state = reactive({ users: [] })

onMounted(() => {
  axios.get('/api/users')
  .then(function (response) {
    // handle success
    console.log(response);
    state.users = response.data.users;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
})
</script>
<template>
  <div class="left_pane">
    <h1>Users</h1>
    <p v-if="!state.users">Loading...</p>
    <ul v-else>
      <li
        v-for="user in state.users"
        :key="user.id"
        :data-test-id="`user-${user.id}`"
      >
        {{user.name}}
      </li>
    </ul>

  </div>
</template>
<style>
.left_pane{
  background-color: aquamarine;
  min-width: 200px;
}
</style>