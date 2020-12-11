<template>
  <div id="app">
    <Header></Header>
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    UserList, Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
