<template>
  <div
    id="user-list"
    class="mt-16"
  >
    <h2 class="font-bold text-5xl text-emerald-500 text-center">
      User list
    </h2>
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        <span class="name">{{ user.name }}</span>
        <span class="username">{{ user.username }}</span>
        <span class="email">{{ user.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserList",
  mounted() {
    this.$store.dispatch("load_users");
  },
  computed: mapState(["users"]),
};
</script>
