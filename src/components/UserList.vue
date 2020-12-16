<template>
  <div id="user-list" class="mt-16">
    <h2 class="font-bold text-5xl text-emerald-500 text-center">User list</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
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
  computed: mapState(["users"])
};
</script>

<style scoped lang="scss">
/* 
#user-list{
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.5);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin-left: 48px;
  margin-right: 48px;
}

#user-list ul{
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#user-list li{
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

span{
  font-weight: bold;
  margin: 10px 10px;
} */
</style>
