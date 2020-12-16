<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" @click="goHome()">Home</router-link>
      <router-link to="/project" @click="goProject()">Project</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({name:'Home'})
    },
    goProject() {
      this.$router.push({name:'ProjectPage'})
    }
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>