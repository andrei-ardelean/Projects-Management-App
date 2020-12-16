<template>
  <div>
    <Header />
    <!-- <ProjectList />
    <UserList /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import ProjectList from "./components/ProjectList.vue";
// import UserList from "./components/UserList.vue";

export default {
  name: "App",
  components: {
    Header
    // ProjectList,
    // UserList
  }
};
</script>

<style scoped lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
