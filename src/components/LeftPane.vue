<script setup>
import axios from "axios";
import { onMounted,reactive } from "vue";
const state = reactive({
                users: [] ,
                count:0
              })

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
function getUser(event){
  state.count = event.target.getAttribute('data-id');
}
</script>
<template>
  <div class="left_pane">
    <h1>Users</h1>
    {{state.count}}
    <p v-if="!state.users">Loading...</p>
    <ul v-else>
      <li
        v-for="user in state.users"
        :key="user.id"
        :data-id="`${user.id}`"
        @click="getUser"
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