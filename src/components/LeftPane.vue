<script setup>
import axios from "axios";
import { onMounted, reactive,ref } from "vue";
const state = reactive({
  users: [],
});

onMounted(() => {
  axios
    .get("/api/users")
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
});
const emit = defineEmits(["userAt"]);
const getUser = (e) => {
  selecteUser.value = e.target.getAttribute("data-id");
  emit("userAt", e.target.getAttribute("data-id"));
};
const selecteUser = ref(0);

</script>
<template>
  <div class="left_pane">
    <h1>Users</h1>
    {{ state.count }}
    <p v-if="!state.users">Loading...</p>
    <ul v-else>
      <li v-for="user in state.users" :key="user.id" :data-id="`${user.id}`" @click="getUser"
        :class="['li-selected',{active: selecteUser ==  user.id}]"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
<style>
.left_pane {
  background-color: aquamarine;
  min-width: 200px;
}

.li-selected {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: 5px;
}
.li-selected:hover {
  background: #7bf3fc;
}
.li-selected.active {
  background: #06f742;
}
</style>
