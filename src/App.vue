<template>
  <div class="bg-gray-50 w-full">
    <Header />
    <div class="h-28" />

    <div id="nav" />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      currentRoutePath : "" 
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goProject() {
      this.$router.push({ name: "Project" });
    },
  },
  beforeCreate () {
    this.$router.push({ name: 'Home' })
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
