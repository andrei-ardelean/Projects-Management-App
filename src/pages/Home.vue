<template>
  <div class="home">
    <Header />
    <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";

export default {
  name: "Home",
  components: {
    ProjectList,
    Header,
  },
};
</script>
