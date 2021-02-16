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
  data() {},
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
